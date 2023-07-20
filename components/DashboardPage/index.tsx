import { Box, Paper } from '@mui/material'
import BasePage from '../BasePage'
import StickyPage from './StickyPage'
import Sticky from './Sticky'
import Banner from '../Banner'

interface DashboardPageProps {
	children: React.ReactNode
}
const DashboardPage = ({ children }: DashboardPageProps) => {
	return (
		<BasePage>
			<Banner />
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
