/**
 * Converts any string to Capital Case.
 */
export const toCapitalCase = (string: string) => {
	return string.toLocaleLowerCase().replace(/(?:^|\s)\S/g, (a) => {
		return a.toUpperCase()
	})
}
