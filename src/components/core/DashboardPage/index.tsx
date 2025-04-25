'use client'
import { Box } from '@mui/material'
import BasePage from '../BasePage'
import StickyPage from './StickyPage'
import Sticky from './Sticky'
import Banner from '../Banner'
// import { useElementSize } from 'usehooks-ts'
import Header from './Header'
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from './constants'
import Sidebar from './Sidebar'

interface DashboardPageProps {
	children: React.ReactNode
}
const DashboardPage = ({ children }: DashboardPageProps) => {
	/** @todo - I should refactor this at some point. I couldn't figure out how to get the header to be the correct size with pure css. */
	// const [pageRef, { width: windowWidth }] = useElementSize()
	return (
		<BasePage>
			<Banner />
			<StickyPage>
				<Sticky sx={{ height: '100vh', zIndex: 1 }}>
					<Header width={1000} />
					<Sidebar />
				</Sticky>
				<Box
					marginTop={`${HEADER_HEIGHT + 15}px`}
					marginLeft={`${SIDEBAR_WIDTH + 15}px`}
					marginRight={`15px`}
					width={`calc(100% - ${SIDEBAR_WIDTH + 30}px)`}
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
