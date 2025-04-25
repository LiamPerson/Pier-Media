const titleElement = document.getElementById('title')
const descriptionElement = document.getElementById('description')
const tagsElement = document.getElementById('tags')
const dateAndLengthElement = document.getElementById('dateAndLength')
const videoPlayer = document.getElementById('video')

const fileServer = 'http://0.0.0.0:3000/file?url='

const slugs = (url) => new URL(url).pathname.match(/[^\/]+/g)

const getVideo = (url) => {
	const urlSlugs = slugs(url)
	const slugsLength = urlSlugs.length
	return fileServer + urlSlugs[slugsLength - 1]
}

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
		tagsInHtml.push(`<span class="tag">${item}</span>`)
	})
	return tagsInHtml
}

const start = async () => {
	const currentUrl = new URL(window.location.href)
	const videoSourceRaw = currentUrl.searchParams.get('v')

	const metadata = await (await fetch(fileServer + getMetadata(videoSourceRaw))).json()

	console.log('Metadata', metadata)
	// Put video in player
	videoPlayer.src = fileServer + videoSourceRaw

	// Fill in content:
	titleElement.innerText = metadata.title
	descriptionElement.innerText = metadata.description
	dateAndLengthElement.innerText = `${metadata.duration_string} • ${timeAgo(metadata.timestamp)}`
	tagsElement.innerHTML = createTags(metadata.tags)
}

start()
