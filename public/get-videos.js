const grid = document.getElementById('grid')

const timeAgo = (unixTimestamp) => {
	const now = Math.floor(Date.now() / 1000)
	const secondsAgo = now - unixTimestamp
	let interval = Math.floor(secondsAgo / 31536000)

	if (interval > 1) {
		return `${interval} years ago`
	}
	interval = Math.floor(secondsAgo / 2592000)
	if (interval > 1) {
		return `${interval} months ago`
	}
	interval = Math.floor(secondsAgo / 86400)
	if (interval > 1) {
		return `${interval} days ago`
	}
	interval = Math.floor(secondsAgo / 3600)
	if (interval > 1) {
		return `${interval} hours ago`
	}
	interval = Math.floor(secondsAgo / 60)
	if (interval > 1) {
		return `${interval} minutes ago`
	}
	return `${Math.floor(secondsAgo)} seconds ago`
}

const displayResults = (results) => {
	const newContent = []
	results.forEach((item) => {
		newContent.push(`<a href="./watch?v=${item.fileUrl}" class="video-card">
				        <div class="thumbnail">
					        <span class="duration">${item.duration}</span>
				        </div>
				        <div class="video-info">
					        <h3>${item.title}</h3>
					        <p>${timeAgo(item.createdAt)}</p>
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
	const fetchUrl = `http://localhost:3000/search?q=${encodeURIComponent(query)}`

	fetch(fetchUrl)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			displayResults(data)
			alert('Data fetched successfully!')
		})
		.catch((error) => {
			console.error('Error fetching data:', error)
			alert('Failed to fetch data')
		})
}

start()
