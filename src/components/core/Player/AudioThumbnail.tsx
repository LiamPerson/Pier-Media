import Image from 'next/image'
import Link from 'next/link'

import { useAudio } from './useAudio'

export const AUDIO_THUMBNAIL_MAXIMUM_HEIGHT = 90

const getMaxWidth = (originalHeight: number, originalWidth: number) => {
	const ratio = originalWidth / originalHeight
	return ratio * AUDIO_THUMBNAIL_MAXIMUM_HEIGHT
}

type Props = {
	audio: NonNullable<ReturnType<typeof useAudio>>
}
export const AudioThumbnail = ({ audio }: Props) => {
	return (
		<Link href={`/music/${audio.id}`}>
			<Image
				src={audio.thumbnail.file.location}
				alt={audio.title}
				quality={100}
				priority
				width={audio.thumbnail.width}
				height={audio.thumbnail.height}
				style={{
					maxHeight: AUDIO_THUMBNAIL_MAXIMUM_HEIGHT,
					maxWidth: getMaxWidth(audio.thumbnail.height, audio.thumbnail.width),
					objectFit: 'cover',
				}}
			/>
		</Link>
	)
}
