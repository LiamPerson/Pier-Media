import { Paper, Skeleton } from '@mui/material'
import Image from 'next/image'

import { GetAudiosQuery, Maybe } from '@/gql/codegen/graphql'
import { ValueOf } from '@/libs/types'

type Props = {
	audio?: Maybe<ValueOf<GetAudiosQuery['audios']>>
}

export const AudioThumbnail = ({ audio }: Props) => {
	return (
		<Paper
			sx={{
				aspectRatio: '16 / 9',
				maxHeight: '50vh',
				minHeight: '360px',
				width: '100%',
				overflow: 'hidden',
				img: {
					objectFit: 'contain',
					objectPosition: 'center',
					width: '100%',
					height: '100%',
				},
			}}
		>
			{!audio ? (
				<Skeleton
					variant='rectangular'
					width='100%'
					height='100%'
				/>
			) : (
				<Image
					src={audio.thumbnail.file.location}
					alt={`Video cover of ${audio.title}`}
					width={audio.thumbnail.width}
					height={audio.thumbnail.height}
				/>
			)}
		</Paper>
	)
}
