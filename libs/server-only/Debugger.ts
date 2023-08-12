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
}

export default Debugger
