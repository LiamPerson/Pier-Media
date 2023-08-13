import { lookup } from 'mime-types'
import { createWriteStream } from 'node:fs'
import { get as httpGet } from 'node:http'
import { get as httpsGet } from 'node:https'
import { basename } from 'node:path'

namespace Network {
	export const getFilenameFromUrl = (path: string) => {
		const url = new URL(path)
		return basename(url.pathname)
	}
	const getProtocolAdapter = (targetUrl: string) => {
		const url = new URL(targetUrl)
		if (url.protocol === 'http:') return httpGet
		if (url.protocol === 'https:') return httpsGet
		throw new Error(`Protocol '${url.protocol}' is not supported`)
	}
	interface fileProps {
		url: string
		output: string // directory + filename + extension
	}
	interface fileReturn {
		mediaType: string
		size: number
	}
	export const getFile = async ({ url, output }: fileProps): Promise<fileReturn> => {
		const protocolAdapter = getProtocolAdapter(url)
		return await new Promise((resolve) => {
			protocolAdapter(url, (response) => {
				const mediaType = lookup(output)
				if (!mediaType) throw Error(`Media type for '${output}' could not be found`)
				const file = createWriteStream(output)
				response.pipe(file)
				file.on('finish', () => {
					const size = file.bytesWritten
					file.close()
					console.log('Download Completed')
					resolve({ mediaType, size })
				})
			})
		})
	}
}

export default Network
