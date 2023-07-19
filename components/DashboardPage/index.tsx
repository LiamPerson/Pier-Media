import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import BasePage from '../BasePage'
import Sidebar from './Sidebar'
import ROUTES, { ROUTE_ICONS } from '@/libs/routes'
import { toCapitalCase } from '@/libs/helpers'

interface DashboardPageProps {
	children: React.ReactNode
}
const DashboardPage = ({ children }: DashboardPageProps) => {
	return (
		<BasePage>
			<Box sx={{ height: '50px', background: 'red' }}>a</Box>
			<Stack
				direction={'row'}
				height={'100%'}
				gap={'15px'}
			>
				<Sidebar
					defaultOpen
					anchor='left'
					title={<>Navigation</>}
				>
					<List>
						{Object.keys(ROUTES).map((key) => {
							const routeName = ROUTES[key as keyof typeof ROUTES]
							const UsingIcon = ROUTE_ICONS[routeName as keyof typeof ROUTE_ICONS]
							return (
								<ListItem
									key={key}
									disablePadding
								>
									<ListItemButton>
										<ListItemIcon>
											<UsingIcon />
										</ListItemIcon>
										<ListItemText primary={toCapitalCase(key)} />
									</ListItemButton>
								</ListItem>
							)
						})}
					</List>
				</Sidebar>
				{children}
			</Stack>
		</BasePage>
	)
}

export default DashboardPage
