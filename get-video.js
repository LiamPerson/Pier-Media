const titleElement = document.getElementById('title')
const uploaderElement = document.getElementById('uploader')
const descriptionElement = document.getElementById('description')
const tagsElement = document.getElementById('tags')
const dateAndLengthElement = document.getElementById('dateAndLength')
const videoPlayer = document.getElementById('video')
const relatedVideosContainer = document.getElementById('related-videos')

const convertSecondsToMMSS = (seconds) => {
	seconds = Math.floor(seconds)

	// Calculate minutes and remaining seconds
	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = seconds % 60

	// Format minutes and seconds to always show two digits
	const formattedMinutes = String(minutes).padStart(2, '0')
	const formattedSeconds = String(remainingSeconds).padStart(2, '0')

	return `${formattedMinutes}:${formattedSeconds}`
}

const getMetadata = (url) => {
	// Find the last occurrence of dot in the URL to remove the current extension
	const lastDotIndex = url.lastIndexOf('.')
	if (lastDotIndex === -1) {
		throw new Error('No extension found in the file URL.')
	}

	// Remove the current extension and append ".info.json"
	const newUrl = url.substring(0, lastDotIndex) + '.info.json'
	return newUrl
}

const createTags = (tags) => {
	const tagsInHtml = []
	tags.forEach((item) => {
		tagsInHtml.push(`<a href="./?q=${item}" class="tag">${item}</a>`)
	})
	return tagsInHtml
}

/**
 * Renders items
 * @param {*} results
 * @param {string} currentVideoSourceUri The current video's URI. This is like an ID to filter it out of the related results.
 */
const displayResults = (results, currentVideoSourceUri) => {
	const newContent = []
	results.forEach((item) => {
		if (item.fileUrl === currentVideoSourceUri) return

		newContent.push(`<a href="./watch.html?v=${item.fileUrl}" class="video-card">
				        <div class="thumbnail">
							<img src="${FILE_SERVER + item.fileUrl}?thumbnail=true" alt="Watch ${item.title}" />
					        <span class="duration">${item.duration}</span>
				        </div>
				        <div class="video-info">
					        <h3>${item.title}</h3>
					        <p><span>${item.uploader}</span> • ${timeAgo(item.createdAt)}</p>
				        </div>
			        </a>`)
	})
	relatedVideosContainer.innerHTML = newContent.join('')
}

const start = async () => {
	const currentUrl = new URL(window.location.href)
	const videoSourceRaw = currentUrl.searchParams.get('v')

	const metadata = await (await fetch(FILE_SERVER + getMetadata(videoSourceRaw))).json()

	console.log('Metadata', metadata)
	// Put video in player
	videoPlayer.src = FILE_SERVER + videoSourceRaw

	// Fill in content:
	const categories = metadata.tags || metadata.genres
	titleElement.innerText = metadata.title
	uploaderElement.innerHTML = `<a href="./?q=${metadata.uploader}">${metadata.uploader}</a>`
	descriptionElement.innerText = metadata.description
	dateAndLengthElement.innerText = `${convertSecondsToMMSS(metadata.duration)} • ${timeAgo(metadata.timestamp)}`
	tagsElement.innerHTML = createTags(categories)
	document.title = metadata.title
	document.description = metadata.description

	// Get related videos
	// Construct the search from video metadata
	const searchQuery = `${metadata.title} - ${metadata.uploader}`
	const fetchUrl = `${SEARCH_API_URL}?q=${encodeURIComponent(searchQuery)}&r=50&s=normal`

	fetch(fetchUrl)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			displayResults(data, videoSourceRaw)
		})
		.catch((error) => {
			console.error('Error fetching data:', error)
			relatedVideosContainer.innerHTML = 'Failed to fetch content... Check console for errors.'
		})
}

start()
