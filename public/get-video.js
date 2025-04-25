const videoPlayer = document.getElementById('video')
const fileServer = 'http://0.0.0.0:8112/'

const getFileFromUrl = (url) => {
	const splitUrl = url.split('/')
	const splitLength = splitUrl.length
	return splitUrl[splitLength - 1]
}

const start = () => {
	const currentUrl = new URL(window.location.href)
	console.log('currentUrl', currentUrl)
	const videoSourceRaw = currentUrl.searchParams.get('v')
	console.log('videoSourceRaw', videoSourceRaw)
	const videoSource = getFileFromUrl(videoSourceRaw)
	console.log('Video source', fileServer + videoSource)
	videoPlayer.src = fileServer + videoSource
}

start()
