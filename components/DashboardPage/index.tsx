import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import BasePage from '../BasePage'
import Sidebar from './Sidebar'

interface DashboardPageProps {
	children: React.ReactNode
}
const DashboardPage = ({ children }: DashboardPageProps) => {
	return (
		<BasePage>
			<Stack
				direction={'row'}
				height={'100%'}
			>
				<Sidebar
					defaultOpen
					anchor='left'
					title={<>Navigation</>}
				>
					<List>
						{['Details', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
							<ListItem
								key={text}
								disablePadding
							>
								<ListItemButton>
									<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Sidebar>
				{children}
			</Stack>
		</BasePage>
	)
}

export default DashboardPage
