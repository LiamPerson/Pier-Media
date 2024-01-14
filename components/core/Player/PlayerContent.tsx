import { AudioPlayerSmall } from './AudioPlayerSmall'

type OverlayProps = {
	src: string | null
}

export const PlayerContent = ({ src }: OverlayProps) => {
	if (!src) return <div>No audio selected.</div>
	return <AudioPlayerSmall src={src} />
}
