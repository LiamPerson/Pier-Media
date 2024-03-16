import Image from 'next/image'
import Link from 'next/link'

import { useTrack } from './useTrack'

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
	const track = useTrack(media.id)

	if (!track) return null // @todo - Add loading state

	return (
		<Link href={`/music/${media.id}`}>
			<Image
				src={track.thumbnail.file.location}
				alt={track.title}
				quality={100}
				priority
				width={track.thumbnail.width}
				height={track.thumbnail.height}
				style={{ maxHeight: MAXIMUM_HEIGHT, maxWidth: getMaxWidth(track.thumbnail.height, track.thumbnail.width), objectFit: 'cover' }}
			/>
		</Link>
	)
}
