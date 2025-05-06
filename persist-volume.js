/**
 * Persists the volume between pages.
 */
window.addEventListener(
	'DOMContentLoaded',
	function () {
		const video = document.getElementById('video')
		const SESSION_KEY_VOLUME = 'videoVolume'
		const defaultVolume = 1

		video.volume = this.sessionStorage.getItem(SESSION_KEY_VOLUME) || defaultVolume

		/**
		 * Listen for when volume is changed. If it is, store that as the new value.
		 */
		video.addEventListener('volumechange', function () {
			sessionStorage.setItem(SESSION_KEY_VOLUME, video.volume)
		})
	},
	true
)
