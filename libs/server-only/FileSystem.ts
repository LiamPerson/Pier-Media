import { accessSync, constants } from 'fs'

class FileSystem {
	static isAccessible(path: string, mode: number = constants.W_OK) {
		try {
			accessSync(path, mode)
			return true
		} catch {
			return false
		}
	}
}

export default FileSystem
