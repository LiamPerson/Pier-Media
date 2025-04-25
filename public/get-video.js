const videoPlayer = document.getElementById('video')
const fileServer = 'http://0.0.0.0:8112/'

const slugs = (url) => new URL(url).pathname.match(/[^\/]+/g)

const getVideo = (url) => {
	const urlSlugs = slugs(url)
	const slugsLength = urlSlugs.length
	return fileServer + urlSlugs[slugsLength - 1]
}

const getMetadata = (url) => {
	const urlSlugs = slugs(url)
	const slugsLength = urlSlugs.length
	const videoFile = urlSlugs[slugsLength - 1]
	const splitUrl = videoFile.split('.')
	return fileServer + splitUrl[0] + '.info.json'
}

const start = async () => {
	const currentUrl = new URL(window.location.href)
	const videoSourceRaw = currentUrl.searchParams.get('v')

	const videoSource = getVideo(videoSourceRaw)

	const metadata = fetch(getMetadata(videoSourceRaw))

	console.log('Metadata', metadata)
	videoPlayer.src = videoSource
}

start()
