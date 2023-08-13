/**
 * Converts any string to Capital Case.
 */
export const toCapitalCase = (string: string) => {
	return string.toLocaleLowerCase().replace(/(?:^|\s)\S/g, (a) => {
		return a.toUpperCase()
	})
}

/**
 * Gets an image from a URL.
 */
export const getImage = async (url: string) => {
	const img = new Image()
	img.src = url
	await img.decode()
	return img
}
