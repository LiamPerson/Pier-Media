'use client'
import DashboardPage from '@/components/core/DashboardPage'
import { Button } from '@mui/material'

const IndexPage = () => {
	const handleDownload = () => {
		console.error('Unimplemented')
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
