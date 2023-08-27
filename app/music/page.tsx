'use client'
import DashboardPage from '@/components/core/DashboardPage'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { GetGenresDocument } from '@/gql/codegen/graphql'
import { useQuery } from '@apollo/client'

const IndexPage = () => {
	const { data, loading, error } = useQuery(GetGenresDocument)
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
					{data?.genres.map((genre) => {
						if (!genre) return null
						return (
							<Card key={genre.id}>
								<CardContent>
									<Typography variant='h5'>{genre.name}</Typography>
									<Typography variant='body2'>{genre.description}</Typography>
								</CardContent>
							</Card>
						)
					})}
				</Grid>
			)}
		</DashboardPage>
	)
}

export default IndexPage
