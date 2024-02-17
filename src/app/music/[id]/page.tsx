'use client'
import { useQuery } from '@apollo/client'
import { Typography } from '@mui/material'

import { TrackThumbnail } from './TrackThumbnail'
import { TrackTitle } from './TrackTitle'

import DashboardPage from '@/components/core/DashboardPage'
import { GetTracksDocument } from '@/gql/codegen/graphql'

/**
 * @note - Anyone: We can probably render all of this at the page level.
 * @todo Surely there is a better way to the page types for this.
 */
const PlayMusicPage = ({ params }: { params: { id: string } }) => {
	const trackId = parseInt(params.id, 10)
	const { data, error } = useQuery(GetTracksDocument, { variables: { where: { id: trackId } } })
	const track = data?.tracks[0]
	return (
		<DashboardPage>
			{error && <Typography variant='body1'>Error: {error.message}</Typography>}
			<TrackThumbnail track={track} />
			<TrackTitle track={track} />
		</DashboardPage>
	)
}

export default PlayMusicPage
