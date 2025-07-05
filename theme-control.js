const SESSION_KEY_THEME = 'theme'
/**
 * Persists the theme between pages.
 */
window.addEventListener(
	'DOMContentLoaded',
	function () {
		/**
		 * Default false as light is default.
		 */
		const theme = this.sessionStorage.getItem(SESSION_KEY_THEME) || false
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme)
		} else {
			document.documentElement.removeAttribute('data-theme')
		}
	},
	true
)

function toggleTheme() {
	const theme = document.documentElement.getAttribute('data-theme')
	if (theme) {
		document.documentElement.removeAttribute('data-theme')
		sessionStorage.removeItem(SESSION_KEY_THEME)
	} else {
		document.documentElement.setAttribute('data-theme', 'dark')
		sessionStorage.setItem(SESSION_KEY_THEME, 'dark')
	}
}
