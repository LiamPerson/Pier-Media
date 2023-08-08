import { accessSync, constants } from 'fs'

interface isAccessibleOptions {
	mode?: number
	throwError?: boolean
}

class FileSystem {
	/**
	 * Checks if a path is accessible with the given mode.
	 */
	static isAccessible(path: string, { mode = constants.W_OK, throwError = false }: isAccessibleOptions = {}) {
		try {
			accessSync(path, mode)
			return true
		} catch (e: any) {
			if (throwError) {
				throw e
			}
			return false
		}
	}
}

export default FileSystem
