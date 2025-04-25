const grid = document.getElementById('grid')

const displayResults = (results) => {
	const newContent = []
	results.forEach((item) => {
		newContent.push(`<a href="./watch.html?v=${item.fileUrl}" class="video-card">
				        <div class="thumbnail">
							<img src="${FILE_SERVER + item.fileUrl}?thumbnail=true" alt="Watch ${item.title}" />
					        <span class="duration">${item.duration}</span>
				        </div>
				        <div class="video-info">
					        <h3>${item.title}</h3>
					        <p><span>${item.uploader}</span> ${timeAgo(item.createdAt)}</p>
				        </div>
			        </a>`)
	})
	grid.innerHTML = newContent.join('')
}

const start = () => {
	const defaultQuery = 'dog'

	// Get the query parameter from the current URL
	const urlParams = new URLSearchParams(window.location.search)
	const query = urlParams.get('q') || defaultQuery

	if (!query) {
		console.log(`No query provided. Showing "${defaultQuery}"`)
		return
	}

	// Construct the URL with the query parameter
	const fetchUrl = `http://localhost:3000/search?q=${encodeURIComponent(query)}&r=50`

	fetch(fetchUrl)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			displayResults(data)
		})
		.catch((error) => {
			console.error('Error fetching data:', error)
			grid.innerHTML = 'Failed to fetch content... Check console for errors.'
		})
}

start()
