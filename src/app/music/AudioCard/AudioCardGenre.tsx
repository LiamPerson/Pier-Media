import { Typography } from '@mui/material'

import PriceTagsIcon from '@/components/shared/icons/PriceTagsIcon'
import { GetAudiosQuery } from '@/gql/codegen/graphql'

type Audio = NonNullable<GetAudiosQuery['audios'][number]>

type Props = {
	genre?: Audio['genre']
}

const AudioCardGenre = ({ genre }: Props) => {
	if (!genre) return null
	return (
		<Typography sx={{ display: 'inline-block' }}>
			<PriceTagsIcon
				width={'12px'}
				height={'12px'}
			/>{' '}
			{genre.name}
		</Typography>
	)
}

export default AudioCardGenre
