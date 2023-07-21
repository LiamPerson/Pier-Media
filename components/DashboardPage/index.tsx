import { Box, Paper } from '@mui/material'
import BasePage from '../BasePage'
import StickyPage from './StickyPage'
import Sticky from './Sticky'
import Banner from '../Banner'
import { useElementSize } from 'usehooks-ts'
import Header from './Header'
import { HEADING_HEIGHT, SIDEBAR_WIDTH } from './constants'
import Sidebar from './Sidebar'

interface DashboardPageProps {
	children: React.ReactNode
}
const DashboardPage = ({ children }: DashboardPageProps) => {
	/** @todo - I should refactor this at some point. I couldn't figure out how to get the header to be the correct size with pure css. */
	const [pageRef, { width: windowWidth }] = useElementSize()
	return (
		<BasePage ref={pageRef}>
			<Banner />
			<StickyPage>
				<Sticky sx={{ height: '100vh', zIndex: 1 }}>
					<Header width={windowWidth} />
					<Sidebar />
				</Sticky>
				<Box
					marginTop={`calc(${HEADING_HEIGHT} + 15px)`}
					marginLeft={`calc(${SIDEBAR_WIDTH} + 15px)`}
				>
					{children}
				</Box>
			</StickyPage>
			{/* Footer */}
			<Box sx={{ background: 'orange', height: '1400px' }}>823r239ry</Box>
		</BasePage>
	)
}

export default DashboardPage
