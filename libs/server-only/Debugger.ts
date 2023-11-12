import { writeFile } from 'fs'
import { resolve } from 'path'
import 'server-only'

/**
 * Selectively logs depending on the value of the DEBUG_MODE environment variable.
 */
class Debugger {
	static log(...args: any[]) {
		if (Debugger.isDebug()) {
			console.log(...args)
		}
	}
	static isDebug() {
		return process.env.DEBUG_MODE === 'true'
	}
	/**
	 * Dumps a file in the ./dump folder with the current timestamp as the filename.
	 * @note This is only available in debug mode.
	 * @warning Make sure you have a dump folder in the root of the project otherwise this operation will fail.
	 */
	static dumpJsonToFile(object: any) {
		if (Debugger.isDebug()) {
			const timestamp = Date.now()
			const path = resolve(`./dump/${timestamp}.json`)
			writeFile(path, JSON.stringify(object, null, 4), (error) => {
				if (error) {
					console.error('Failed to dump to file', error)
				} else {
					console.log(`Dumped to file ${path}`)
				}
			})
		}
	}
}

export default Debugger
