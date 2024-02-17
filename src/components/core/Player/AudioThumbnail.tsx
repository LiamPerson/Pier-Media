import { AudioMedia } from '@/constants/media'
import Image from 'next/image'

const MAXIMUM_HEIGHT = 90

const getMaxWidth = (originalHeight: number, originalWidth: number) => {
	const ratio = originalWidth / originalHeight
	return ratio * MAXIMUM_HEIGHT
}

type Props = {
	media: AudioMedia
}
export const AudioThumbnail = ({ media }: Props) => {
	return (
		<Image
			src={media.thumbnail.file.location}
			alt={media.title}
			quality={100}
			priority
			width={media.thumbnail.width}
			height={media.thumbnail.height}
			style={{ maxHeight: MAXIMUM_HEIGHT, maxWidth: getMaxWidth(media.thumbnail.height, media.thumbnail.width), objectFit: 'cover' }}
		/>
	)
}
