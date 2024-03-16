import Image from 'next/image'
import Link from 'next/link'

import { useAudio } from './useAudio'

import { AudioMedia } from '@/constants/media'

const MAXIMUM_HEIGHT = 90

const getMaxWidth = (originalHeight: number, originalWidth: number) => {
	const ratio = originalWidth / originalHeight
	return ratio * MAXIMUM_HEIGHT
}

type Props = {
	media: AudioMedia
}
export const AudioThumbnail = ({ media }: Props) => {
	const audio = useAudio(media.id)

	if (!audio) return null // @todo - Add loading state

	return (
		<Link href={`/music/${media.id}`}>
			<Image
				src={audio.thumbnail.file.location}
				alt={audio.title}
				quality={100}
				priority
				width={audio.thumbnail.width}
				height={audio.thumbnail.height}
				style={{ maxHeight: MAXIMUM_HEIGHT, maxWidth: getMaxWidth(audio.thumbnail.height, audio.thumbnail.width), objectFit: 'cover' }}
			/>
		</Link>
	)
}
