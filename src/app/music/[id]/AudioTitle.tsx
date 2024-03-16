import { Skeleton, Typography } from '@mui/material'

import { GetAudiosQuery, Maybe } from '@/gql/codegen/graphql'
import { ValueOf } from '@/libs/types'

type Props = {
	audio?: Maybe<ValueOf<GetAudiosQuery['audios']>>
}

export const AudioTitle = ({ audio }: Props) => {
	if (!audio?.title) {
		return (
			<Skeleton
				variant='text'
				width={500}
				height={120}
			/>
		)
	}
	return <Typography variant='h1'>{audio.title}</Typography>
}
