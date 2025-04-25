const titleElement = document.getElementById('title')
const descriptionElement = document.getElementById('description')
const tagsElement = document.getElementById('tags')
const dateAndLengthElement = document.getElementById('dateAndLength')
const videoPlayer = document.getElementById('video')

const convertSecondsToMMSS = (seconds) => {
	// If seconds is less than 60, return "00:00" per the given specification.
	if (seconds < 60) {
		return '00:00'
	}

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

const start = async () => {
	const currentUrl = new URL(window.location.href)
	const videoSourceRaw = currentUrl.searchParams.get('v')

	const metadata = await (await fetch(FILE_SERVER + getMetadata(videoSourceRaw))).json()

	console.log('Metadata', metadata)
	// Put video in player
	videoPlayer.src = FILE_SERVER + videoSourceRaw

	// Fill in content:
	titleElement.innerText = metadata.title
	descriptionElement.innerText = metadata.description
	dateAndLengthElement.innerText = `${convertSecondsToMMSS(metadata.duration)} • ${timeAgo(metadata.timestamp)}`
	tagsElement.innerHTML = createTags(metadata.tags)
	document.title = metadata.title
	document.description = metadata.description
}

start()
