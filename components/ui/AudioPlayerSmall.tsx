import { fromCdn } from '@/libs/helpers'

interface AudioPlayerSmallProps {
	src: string
}

const AudioPlayerSmall = ({ src }: AudioPlayerSmallProps) => {
	return (
		<audio
			controls
			src={fromCdn(src)}
		/>
	)
}

export default AudioPlayerSmall
