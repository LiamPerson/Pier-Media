/**
 * Persists the search text between pages and navigation and reload
 */
window.addEventListener(
	'DOMContentLoaded',
	function () {
		const searchInput = document.getElementById('search')
		const SESSION_KEY_SEARCH = 'search'
		// Try load value from params ...
		const urlParams = new URLSearchParams(this.location.search)
		let query = urlParams.get('q')

		if (query) this.sessionStorage.setItem(SESSION_KEY_SEARCH, query)

		// If no value, try load from session
		query = this.sessionStorage.getItem(SESSION_KEY_SEARCH)

		searchInput.value = query
	},
	true
)
