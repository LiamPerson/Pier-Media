import 'server-only'
import os from 'node:os'
import Debugger from './Debugger'
import YTDlpWrap from 'yt-dlp-wrap-extended'
import PierSettings from './PierSettings'
import { PrismaClient } from '@prisma/client'
import path from 'node:path'
import System from './System'
import { constants } from 'node:fs'
import Provider from './collections/Provider'
import Author from './collections/Author'
import File from './collections/File'
import Image from './collections/Image'

export enum DownloadType {
	AUDIO,
	VIDEO,
}

interface DownloadProps {
	url: string
	type: DownloadType
}

interface YtdlpBinaries {
	binary: string
	machine: string[]
	platform: NodeJS.Platform[]
	releaseChecker?: (release: string) => boolean
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

class Downloader {
	static checkExistingPathThrowingError(path: string) {
		if (!System.isAccessible(path, { mode: constants.W_OK })) {
			throw new Error(
				`You cannot download to the path '${path}' as it is not writable. Please check your download settings and permissions.`
			)
		}
	}
	static downloadTypeToString(type: DownloadType) {
		switch (type) {
			case DownloadType.AUDIO:
				return 'audio'
			case DownloadType.VIDEO:
				return 'video'
		}
	}
	static getYtdlpBinaryPath() {
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
		/** @todo - Liam: This will probably not work on compile time */
		return path.resolve('./public/bin/yt-dlp/' + binaryInfo.binary)
	}
	static async getDownloadFolderPath(downloadType: DownloadType, prisma: PrismaClient) {
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

		Downloader.checkExistingPathThrowingError(path)
		return path
	}
	static async getDownloadDetails(url: string, ytdlp: YTDlpWrap) {
		return await ytdlp.getVideoInfo(url)
	}
	static async download({ url, type }: DownloadProps) {
		const prisma = new PrismaClient()
		const downloadFolder = await Downloader.getDownloadFolderPath(type, prisma)

		const downloadPath = `${downloadFolder}/output123.mp4`

		Debugger.log(`Downloading ${url} as ${Downloader.downloadTypeToString(type)}`)
		const binary = Downloader.getYtdlpBinaryPath()
		Debugger.log(`Using binary at location ${binary}`)
		const downloader = new YTDlpWrap(binary)
		const downloadDetails = await Downloader.getDownloadDetails(url, downloader)
		Debugger.dumpJsonToFile(downloadDetails)
		const authorSourceId = downloadDetails.channel_id || downloadDetails.uploader_id

		const provider = await Provider.get(Provider.toProviderOption(downloadDetails.webpage_url_domain), prisma)
		const author = await Author.get({ name: downloadDetails.uploader, sourceId: authorSourceId, provider }, prisma)
		// const videoFile = await File.get({ location: downloadPath, size: downloadDetails.filesize_approx, tags: downloadDetails.tags }, prisma)
		const image = await Image.get({ source: downloadDetails.thumbnail, filename: 'test123.jpg' }, prisma)

		console.log(`Attempting to download to path ${downloadPath}`)
		await downloader.execPromise([url, '-o', downloadPath], { shell: true, detached: true })
	}
}

export default Downloader
