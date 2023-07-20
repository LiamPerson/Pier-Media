import { Box, Paper } from '@mui/material'
import BasePage from '../BasePage'
import StickyPage from './StickyPage'
import Sticky from './Sticky'
import Banner from '../Banner'

const SIDEBAR_WIDTH = '150px'

interface DashboardPageProps {
	children: React.ReactNode
}
const DashboardPage = ({ children }: DashboardPageProps) => {
	return (
		<BasePage>
			<Banner />
			<StickyPage>
				<Sticky sx={{ height: '100vh', zIndex: 1 }}>
					<Paper sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>9999999999999999999999999999</Paper>
					<Paper sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: SIDEBAR_WIDTH }}>side</Paper>
				</Sticky>
				<Box marginLeft={SIDEBAR_WIDTH}>{children}</Box>
			</StickyPage>
			{/* Footer */}
			<Box sx={{ background: 'orange', height: '1400px' }}>823r239ry</Box>
		</BasePage>
	)
}

export default DashboardPage
