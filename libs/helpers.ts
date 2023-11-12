/**
 * Converts any string to Capital Case.
 */
export const toCapitalCase = (string: string) => {
	return string.toLocaleLowerCase().replace(/(?:^|\s)\S/g, (a) => {
		return a.toUpperCase()
	})
}

/**
 * Converts seconds to a timestamp:
 * @example secondsToTimestamp(65) // result: 1:05
 * @example secondsToTimestamp(3600) // result: 1:00:00
 */
export const secondsToTimestamp = (inputSeconds: number) => {
	const oneHourInSeconds = 3600
	const hours = Math.floor(inputSeconds / oneHourInSeconds)
		.toString()
		.padStart(2, '0')
	const minutes = Math.floor((inputSeconds % oneHourInSeconds) / 60)
		.toString()
		.padStart(1, '0')
	const seconds = Math.floor(inputSeconds % 60)
		.toString()
		.padStart(2, '0')

	if (inputSeconds >= oneHourInSeconds) return hours + ':' + minutes + ':' + seconds
	return minutes + ':' + seconds
}

/**
 * Gets a file from the CDN (content delivery network).
 * @todo - Anyone: We need to make this string not hard coded.
 */
export const fromCdn = (path: string) => {
	return `/api/cdn?p=${path}`
}
