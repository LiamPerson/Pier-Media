import { Media } from '@/constants/media'
import { AudioPlayerSmall } from './AudioPlayerSmall'

type OverlayProps = {
	media: Media | null
}

export const PlayerContent = ({ media }: OverlayProps) => {
	if (!media) return <div>No audio selected.</div>
	return <AudioPlayerSmall media={media} />
}
