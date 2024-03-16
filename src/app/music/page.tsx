'use client'
import { useQuery } from '@apollo/client'
import { Grid, Typography } from '@mui/material'

import { AudioCard } from './AudioCard'

import DashboardPage from '@/components/core/DashboardPage'
import { GetAudiosDocument } from '@/gql/codegen/graphql'

/** @note - Anyone: We can probably render all of this at the page level. */

const IndexPage = () => {
	const { data, loading, error } = useQuery(GetAudiosDocument)
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
					{data?.audios.map((audio) => {
						if (!audio) return null
						return (
							<AudioCard
								key={audio.id}
								audio={audio}
							/>
						)
					})}
				</Grid>
			)}
		</DashboardPage>
	)
}

export default IndexPage
