import { AudioMedia } from '@/constants/media'
import { fromCdn } from '@/libs/helpers'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

type AudioPlayerSmallProps = {
	media: AudioMedia
}

export const AudioPlayerSmall = ({ media: media }: AudioPlayerSmallProps) => {
	return (
		<AudioPlayer
			// controls
			autoPlay
			header={
				/** @todo - Anyone: Improve the styling here */
				<>
					{media.title} <i style={{ fontWeight: 'lighter' }}>By</i> {media.author} | {media.genre}
				</>
			}
			src={fromCdn(media.src)}
			style={{
				borderRadius: 0,
				background: '#00000033',
				color: '#fff',
			}}
		/>
	)
}
