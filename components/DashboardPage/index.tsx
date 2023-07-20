import { Box, Paper } from '@mui/material'
import BasePage from '../BasePage'
import StickyPage from './StickyPage'
import Sticky from './Sticky'

interface DashboardPageProps {
	children: React.ReactNode
}
const DashboardPage = ({ children }: DashboardPageProps) => {
	return (
		<BasePage>
			<Box sx={{ height: '50px', background: 'red' }}>a</Box>
			<StickyPage>
				<Sticky>
					<Paper>
						<Paper sx={{ position: 'absolute', top: 0, left: 0, width: '100px' }}>side</Paper>
						asdasdas7777777777777777777777777777777
					</Paper>
				</Sticky>
				<Box>{children}</Box>
			</StickyPage>
		</BasePage>
	)
}

export default DashboardPage
