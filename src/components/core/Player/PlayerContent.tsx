import { AudioPlayerSmall } from './AudioPlayerSmall'
import { usePlayer } from './usePlayer'

import { isAudioMedia } from '@/libs/media-helpers'

export const PlayerContent = () => {
	const { current: media } = usePlayer()
	if (!media) return <div>No audio selected.</div>
	if (!isAudioMedia(media)) return <div>Currently unsupported media type ({media.type}).</div>
	return <AudioPlayerSmall media={media} />
}
