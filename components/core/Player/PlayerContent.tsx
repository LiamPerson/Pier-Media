import { Media, MediaType } from '@/constants/media'
import { AudioPlayerSmall } from './AudioPlayerSmall'

type OverlayProps = {
	media: Media | null
}

export const PlayerContent = ({ media }: OverlayProps) => {
	if (!media) return <div>No audio selected.</div>
	if (media.type !== MediaType.AUDIO) return <div>Currently unsupported media type ({media.type}).</div>
	return <AudioPlayerSmall media={media} />
}
