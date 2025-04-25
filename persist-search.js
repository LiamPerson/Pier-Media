const searchInput = document.getElementById('search')

window.addEventListener(
	'DOMContentLoaded',
	function () {
		const SESSION_KEY_SEARCH = 'search'
		// Try load value from params ...
		const urlParams = new URLSearchParams(window.location.search)
		let query = urlParams.get('q')

		if (query) sessionStorage.setItem(SESSION_KEY_SEARCH, query)

		// If no value, try load from session
		query = this.sessionStorage.getItem(SESSION_KEY_SEARCH)

		searchInput.value = query
	},
	true
)
