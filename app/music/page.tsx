'use client'
import DashboardPage from '@/components/core/DashboardPage'
import { Grid, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GetTracksDocument } from '@/gql/codegen/graphql'
import { TrackCard } from './TrackCard'

/** @note - Anyone: We can probably render all of this at the page level. */

const IndexPage = () => {
	const { data, loading, error } = useQuery(GetTracksDocument)
	return (
		<DashboardPage>
			<Typography variant='h1'>Music</Typography>
			{loading && <Typography variant='body1'>Loading...</Typography>}
			{error && <Typography variant='body1'>Error: {error.message}</Typography>}
			{data && (
				<Grid
					container
					gap={2}
				>
					{data?.tracks.map((track) => {
						if (!track) return null
						return (
							<TrackCard
								key={track.id}
								track={track}
							/>
						)
					})}
				</Grid>
			)}
		</DashboardPage>
	)
}

export default IndexPage
