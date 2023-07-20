import {
	AppBar,
	Box,
	Button,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
	Toolbar,
	Typography,
} from '@mui/material'
import BasePage from '../BasePage'
import Sidebar from './Sidebar'
import ROUTES, { ROUTE_ICONS } from '@/libs/routes'
import { toCapitalCase } from '@/libs/helpers'
import MenuIcon from '@mui/icons-material/Menu'

interface DashboardPageProps {
	children: React.ReactNode
}
const DashboardPage = ({ children }: DashboardPageProps) => {
	return (
		<BasePage>
			<Box sx={{ height: '50px', background: 'red' }}>a</Box>
			<AppBar position='sticky'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
					>
						News
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
			<Stack
				direction={'row'}
				minHeight={'100%'}
				height={'fit-content'}
				gap={'15px'}
			>
				<Sidebar
					defaultOpen
					anchor='left'
					title={<>Navigation</>}
					sx={{
						'& .MuiDrawer-paper': {
							background: '#fbfb4b',
						},
					}}
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
				<Box>{children}</Box>
			</Stack>
		</BasePage>
	)
}

export default DashboardPage
