import DashboardPage from '@/components/core/DashboardPage'
import { Box, Grid, Stack } from '@mui/material'

const IndexPage = () => {
	return (
		<DashboardPage>
			<Box
				sx={{
					height: '1500px',
				}}
			>
				<Stack
					gap={'15px'}
					direction={'row'}
					sx={{ flexWrap: 'wrap' }}
				>
					{Array.from({ length: 20 }).map((_, index) => (
						<Box
							key={index}
							sx={{ display: 'flex', background: 'cyan', width: '100px', height: '100px' }}
						>
							A box {index}
						</Box>
					))}
				</Stack>
			</Box>
		</DashboardPage>
	)
}

export default IndexPage
