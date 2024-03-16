'use client'
import { useQuery } from '@apollo/client'
import { Typography } from '@mui/material'

import { AudioDetails } from './AudioDetails'
import { AudioThumbnail } from './AudioThumbnail'
import { AudioTitle } from './AudioTitle'

import DashboardPage from '@/components/core/DashboardPage'
import { GetAudiosDocument } from '@/gql/codegen/graphql'

/**
 * @note - Anyone: We can probably render all of this at the page level.
 * @todo Surely there is a better way to the page types for this.
 */
const PlayMusicPage = ({ params }: { params: { id: string } }) => {
	const audioId = parseInt(params.id, 10)
	const { data, error } = useQuery(GetAudiosDocument, { variables: { where: { id: audioId } } })
	const audio = data?.audios[0]
	return (
		<DashboardPage>
			{error && <Typography variant='body1'>Error: {error.message}</Typography>}
			<AudioThumbnail audio={audio} />
			<AudioTitle audio={audio} />
			<AudioDetails audio={audio} />
		</DashboardPage>
	)
}

export default PlayMusicPage
