import 'server-only'
import os from 'node:os'
import Debugger from './Debugger'
import YtDlpWrap from 'yt-dlp-wrap-extended'
import PierSettings from './PierSettings'
import { PrismaClient } from '@prisma/client'
import path from 'node:path'
import { constants, statSync } from 'node:fs'
import Provider from './collections/Provider'
import Author from './collections/Author'
import Image from './collections/Image'
import System from './System'
import { InputMaybe } from '@/gql/codegen/graphql'
import Genre from './collections/Genre'
import { parseFile } from 'music-metadata'
import Track from './collections/Track'
import File from './collections/File'
import Network from './Network'
import prisma from '@/prisma/database'

const MAX_DOWNLOAD_TIME = 1000 * 60 * 10 // 10 minutes

export enum DownloadType {
	AUDIO,
	VIDEO,
}

interface DownloadProps {
	url: string
	type: DownloadType
	overrideOnCollision?: InputMaybe<boolean> // Override the file if one already exists at the target location
}

interface YtdlpBinaries {
	binary: string
	machine: string[]
	platform: NodeJS.Platform[]
	releaseChecker?: (release: string) => boolean
}

interface TryDownloadProps {
	downloader: YtDlpWrap
	downloadPath: string
	source: string
	type: DownloadType
}

/**
 * @todo - Anyone:
 * I probably got this dictionary incorrect. Please correct for me at some point :)
 * If you are running on an obscure platform/machine/architecture/version this is probably where the error is
 * coming from.
 */
const YT_DLP_BINARIES: YtdlpBinaries[] = [
	{
		binary: 'yt-dlp_linux',
		machine: ['aix', 'x86_64', 'i386', 'i686', 's390x', 's390', 'ppc64le', 'ppc64', 'mips64', 'mips', 'arm64'],
		platform: ['linux', 'openbsd', 'freebsd', 'sunos', 'android'],
	},
	{
		binary: 'yt-dlp_linux_aarch64',
		machine: ['aarch64'],
		platform: ['linux', 'openbsd', 'freebsd', 'sunos', 'android'],
	},
	{
		binary: 'yt-dlp_linux_armv7l',
		machine: ['arm'],
		platform: ['linux', 'openbsd', 'freebsd', 'sunos', 'android'],
	},
	{
		binary: 'yt-dlp_macos_legacy_10.9',
		machine: ['x86_64', 'i386', 'i686', 's390x', 's390', 'ppc64le', 'ppc64', 'mips64', 'mips', 'aix', 'arm64'],
		platform: ['darwin'],
		releaseChecker: (release) => {
			const releaseBreakdown = release.split('.')
			const releaseMajor = Number(releaseBreakdown[0])
			const releaseMinor = Number(releaseBreakdown[1])
			return releaseMinor < 15 && releaseMajor === 10
		},
	},
	{
		binary: 'yt-dlp_macos_10.15',
		machine: ['x86_64', 'i386', 'i686', 's390x', 's390', 'ppc64le', 'ppc64', 'mips64', 'mips', 'aix', 'arm64'],
		platform: ['darwin'],
		releaseChecker: (release) => {
			const releaseBreakdown = release.split('.')
			const releaseMajor = Number(releaseBreakdown[0])
			const releaseMinor = Number(releaseBreakdown[1])
			return releaseMinor >= 15 && releaseMajor === 10
		},
	},
	{
		binary: 'yt-dlp_win7_sp1.exe',
		machine: ['x86_64', 'i386', 'i686', 's390x', 's390', 'ppc64le', 'ppc64', 'mips64', 'mips', 'aix', 'arm64'],
		platform: ['win32'],
		releaseChecker: (release) => {
			const releaseBreakdown = release.split('.')
			const releaseMajor = Number(releaseBreakdown[0])
			return releaseMajor >= 7
		},
	},
	{
		binary: 'yt-dlp_x86_vista_sp2.exe',
		machine: ['x86_64', 'i386', 'i686', 's390x', 's390', 'ppc64le', 'ppc64', 'mips64', 'mips', 'aix', 'arm64'],
		platform: ['win32'],
		releaseChecker: (release) => {
			const releaseBreakdown = release.split('.')
			const releaseMajor = Number(releaseBreakdown[0])
			return releaseMajor < 7
		},
	},
]

namespace Downloader {
	const checkExistingPathThrowingError = (path: string) => {
		if (!System.isAccessible(path, { mode: constants.W_OK })) {
			throw new Error(
				`You cannot download to the path '${path}' as it is not writable. Please check your download settings and permissions.`
			)
		}
	}
	const downloadTypeToString = (type: DownloadType) => {
		switch (type) {
			case DownloadType.AUDIO:
				return 'audio'
			case DownloadType.VIDEO:
				return 'video'
		}
	}
	const getYtDlpBinaryPath = () => {
		const machine = os.machine()
		const platform = os.platform()
		const release = os.release()
		Debugger.log({ machine, platform, release })
		const binaryInfo = YT_DLP_BINARIES.find((binary) => {
			if (!binary.machine.includes(machine)) return false
			if (!binary.platform.includes(platform)) return false
			if (binary.releaseChecker && !binary.releaseChecker(release)) return false
			return true
		})
		if (!binaryInfo) {
			throw new Error(
				`No binary found for machine '${machine}', platform '${platform}' and release '${release}'. Please report this to the developers or consider contributing to the Downloader.ts file.`
			)
		}
		/** @todo - Liam: This will probably not work after a build (outside of development) */
		return path.resolve('./public/bin/yt-dlp/' + binaryInfo.binary)
	}
	const getDownloadFolderPath = async (downloadType: DownloadType, prisma: PrismaClient) => {
		const settings = await PierSettings.getSettings(prisma)
		let path = settings.downloads.path
		switch (downloadType) {
			case DownloadType.AUDIO:
				path = settings.downloads.audioPath
				break
			case DownloadType.VIDEO:
				path = settings.downloads.videoPath
				break
		}

		checkExistingPathThrowingError(path)
		return path
	}
	const getDownloadDetails = async (url: string, ytdlp: YtDlpWrap) => {
		return await ytdlp.getVideoInfo(url)
	}
	const cleanUrl = (url: string) => {
		// This url cleaning may only work for YouTube, need to test on more providers
		return url.split('&')[0]
	}
	const verifyOriginality = ({ targetPath, throwErrorOnCollision }: { targetPath: string; throwErrorOnCollision: boolean }) => {
		// We need to check that the file doesn't already exist as the target as yt-dlp will not override by default.
		if (throwErrorOnCollision && System.exists(targetPath)) {
			throw new Error(`There is a file collision at '${targetPath}'. Please remove it or change your download settings.`)
		}
	}
	const getExtensionFromUrl = (url: string) => {
		const urlSplit = url.split('.')
		const extension = urlSplit[urlSplit.length - 1]
		return extension
	}

	const tryDownload = async ({ downloader, downloadPath, source, type }: TryDownloadProps) => {
		const extraCommands = type === DownloadType.AUDIO ? ['--extract-audio', '--audio-format', 'mp3'] : []
		return new Promise<void>((resolve, reject) => {
			const controller = new AbortController()
			const timeout = setTimeout(() => {
				controller.abort()
				console.log('Event killed?: ', downloadEventEmitter.ytDlpProcess?.killed)
				reject(`Download timed out. Waited ${MAX_DOWNLOAD_TIME} milliseconds.`)
			}, MAX_DOWNLOAD_TIME)
			const killPromise = (error: Error) => {
				clearTimeout(timeout)
				reject(error || 'Download failed or was aborted.')
			}
			const downloadEventEmitter = downloader
				.exec([source, '-f', 'best', '-o', downloadPath, ...extraCommands], { shell: true }, controller.signal)
				.on('progress', (progress) => {
					console.log('Progress', progress)
				})
				.on('ytDlpEvent', (eventType, eventData) => {
					/**
					 * @todo - Anyone: We need to pay close attention here as this is where we will find
					 * gotchas. The event data is just string literals that are verbatim from the console.
					 *
					 * @todo - Anyone: Need to test the errors have the same (or similar)
					 * errors across the different binaries.
					 *
					 * Maybe we should log an issue with the yt-dlp project to get them to standardise errors or
					 * generate error codes?
					 */
					console.log('Event found!', { eventType, eventData })
				})
				.on('error', (error) => {
					killPromise(error)
				})
				.on('close', () => {
					clearTimeout(timeout)
					resolve()
				})
		})
	}

	export const download = async ({ url, type, overrideOnCollision }: DownloadProps) => {
		/** @todo - Liam: Remove any html query strings from url */
		url = cleanUrl(url)
		console.log('Cleaned url: ', url)

		Debugger.log(`Downloading ${url} as ${downloadTypeToString(type)}`)
		const binary = getYtDlpBinaryPath()
		Debugger.log(`Using binary at location ${binary}`)
		const downloader = new YtDlpWrap(binary)
		const downloadDetails = await getDownloadDetails(url, downloader)

		const sourceId = downloadDetails.id

		Debugger.dumpJsonToFile(downloadDetails)
		const authorSourceId = downloadDetails.channel_id || downloadDetails.uploader_id
		const provider = await Provider.get(Provider.toProviderOption(downloadDetails.webpage_url_domain), prisma)
		const author = await Author.get({ name: downloadDetails.uploader, sourceId: authorSourceId, provider }, prisma)
		const genre =
			(await Genre.inferGenre(downloadDetails.tags.join(' '), prisma)) || (await Genre.inferGenre(downloadDetails.description, prisma))
		Debugger.log('Inferred genre (from description & tags): ', genre)

		const baseName = `${provider.id}.${sourceId}`
		const finalExtension = type === DownloadType.AUDIO ? 'mp3' : 'mp4' /** @todo - Liam: There is no guarantee it will be an mp4 */
		const downloadFolder = await getDownloadFolderPath(type, prisma)
		const downloadPath = `${downloadFolder}/${baseName}`
		const finalPath = `${downloadFolder}/${baseName}.${finalExtension}`

		Debugger.log('Audio download folder: ', downloadFolder)
		Debugger.log('Audio download path: ', downloadPath)
		verifyOriginality({ targetPath: finalPath, throwErrorOnCollision: !overrideOnCollision })
		const thumbnailFilename = `${baseName}.${getExtensionFromUrl(Network.removeSearchFromUrl(downloadDetails.thumbnail))}`
		const thumbnail = await Image.get({ source: downloadDetails.thumbnail, filename: thumbnailFilename }, prisma)

		console.log(`Attempting to download to path ${downloadPath}`)
		/**
		 * @todo - Liam:
		 * You need to handle the download explicitly reading from console to catch warnings + errors + info.
		 * Right now any download to the same location will not override and you will never know why.
		 */
		await tryDownload({ downloader, downloadPath, source: url, type: DownloadType.AUDIO })

		// Verify download
		if (!System.exists(finalPath)) {
			throw new Error(`Download failed. Verification of file '${finalPath}' found that the file does not exist.`)
		}

		const fileStats = statSync(finalPath)
		console.log('File stats', fileStats)
		const fileTags = [...downloadDetails.categories, ...downloadDetails.tags]
		const file = await File.get({ location: finalPath, size: fileStats.size, tags: fileTags }, prisma)

		// Get file bitrate and duration
		/** @todo - Liam: This should be replaced with an FFMPEG call. */
		const metadata = await parseFile(finalPath)
		console.log('Metadata', metadata)
		const track = await Track.get(
			{
				title: downloadDetails.title,
				author,
				provider,
				sourceId,
				thumbnail,
				genre,
				description: downloadDetails.description,
				bitrate: metadata.format.bitrate || -1,
				duration: metadata.format.duration || -1,
				file,
				originalUrl: downloadDetails.webpage_url,
				contributingArtistIds: [],
			},
			prisma
		)
	}
}

export default Downloader
