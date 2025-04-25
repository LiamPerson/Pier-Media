const slugs = (url) => new URL(url).pathname.match(/[^\/]+/g)

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
