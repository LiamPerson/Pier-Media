'use client'
import DashboardPage from '@/components/core/DashboardPage'
import { Button } from '@mui/material'
import downloadAudio from '@/services/downloader/consumers/download-audio'

const IndexPage = () => {
	const handleDownload = () => {
		console.log('handleDownload')
		downloadAudio('https://www.youtube.com/watch?v=3lZTUD4nwsg')
	}
	return (
		<DashboardPage>
			<p>Videos page</p>
			<Button
				variant={'outlined'}
				onClick={handleDownload}
			>
				Download some stuff
			</Button>
		</DashboardPage>
	)
}

export default IndexPage
