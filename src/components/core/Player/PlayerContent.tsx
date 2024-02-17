import { Media } from '@/constants/media'
import { AudioPlayerSmall } from './AudioPlayerSmall'
import { isAudioMedia } from '@/libs/media-helpers'

type OverlayProps = {
	media: Media | null
}

export const PlayerContent = ({ media }: OverlayProps) => {
	if (!media) return <div>No audio selected.</div>
	if (!isAudioMedia(media)) return <div>Currently unsupported media type ({media.type}).</div>
	return <AudioPlayerSmall media={media} />
}
