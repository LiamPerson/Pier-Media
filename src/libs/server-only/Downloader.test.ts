import Downloader, { DownloadType } from './Downloader'
import System from './System'

const AUDIO_AND_VIDEO_TEST = process.env.TEST_DOWNLOADER_AUDIO_AND_VIDEO_URL

describe('Downloader', () => {
	describe('given the url of the test video', async () => {
		if (!AUDIO_AND_VIDEO_TEST)
			throw new Error(
				'No test video url provided. Please add `TEST_DOWNLOADER_AUDIO_AND_VIDEO_URL` to your env with the value of the video you want to test downloads with. '
			)
		const audio = await Downloader.download({ url: AUDIO_AND_VIDEO_TEST, type: DownloadType.VIDEO, overrideOnCollision: true })
		describe('should download file', async () => {
			it('should have an audio file at the download location', async () => {
				expect(audio.file.location).toBeDefined()
				expect(System.exists(audio.file.location)).toBeTruthy()
				expect(System.isAccessible(audio.file.location)).toBeTruthy()
			})
		})
	})
})
