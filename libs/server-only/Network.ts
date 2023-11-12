import { basename, dirname } from 'node:path'
import { pipeline as streamPipeline } from 'node:stream/promises'
import got from 'got'
import { createWriteStream, mkdirSync, writeFileSync } from 'node:fs'
import { fileTypeFromFile } from 'file-type'
import Debugger from './Debugger'

namespace Network {
	/**
	 * Gets the filename from any url.
	 * @example
	 * getFileNameFromUrl("https://a.example.com/123/abc123/image.jpg?test=-oaymwEmC444OgC8quKqQMa8AEB-ABGHIgUCg1MA8=&rs=AOn4C__=-=-aK3tq5QQ-333bv3_Xqw")
	 * // result: `image.jpg`
	 */
	export const getFilenameFromUrl = (path: string) => {
		const url = new URL(path)
		return basename(url.pathname)
	}
	interface fileProps {
		url: string
		output: string // directory + filename + extension
	}
	interface fileReturn {
		mediaType: string
		size: number
	}

	const writeFileAndDirectories = (output: string) => {
		mkdirSync(dirname(output), { recursive: true })
		writeFileSync(output, '')
	}
	/**
	 * Removes search parameters from a url.
	 * @example
	 * removeSearchFromUrl("https://a.example.com/123/abc123/image.jpg?test=-oaymwEmC444OgC8quKqQMa8AEB-ABGHIgUCg1MA8=&rs=AOn4C__=-=-aK3tq5QQ-333bv3_Xqw")
	 * // result: `https://a.example.com/123/ui3rh2hr/image.jpg`
	 */
	export const removeSearchFromUrl = (url: string) => {
		const urlObject = new URL(url)
		urlObject.search = ''
		return urlObject.toString()
	}
	export const getFile = async ({ url, output }: fileProps): Promise<fileReturn> => {
		const gotStream = got.stream(url)
		writeFileAndDirectories(output)
		const outStream = createWriteStream(output)
		await streamPipeline(gotStream, outStream)
		/** @todo - Liam: Figure out how to get this to read from `got` stream */
		const fileType = await fileTypeFromFile(output)
		const size = outStream.bytesWritten
		const mediaType = fileType?.mime ?? 'application/octet-stream'
		Debugger.log(`Saving file from '${url}' to location:`, { output, size, mediaType })
		return { mediaType, size }
	}
}

export default Network
