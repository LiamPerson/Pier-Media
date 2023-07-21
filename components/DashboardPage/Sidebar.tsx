import { Box, Button } from '@mui/material'
import { SIDEBAR_WIDTH } from './constants'
import { ROUTE, ROUTE_ICON, ROUTE_NAME } from '@/libs/routes'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface MenuButtonProps {
	isActive: boolean
	children: React.ReactNode
	href: string
}
const MenuButton = ({ isActive, children, href }: MenuButtonProps) => {
	return (
		<Link href={href}>
			<Button sx={{ background: isActive ? '#555' : '#000' }}>{children}</Button>
		</Link>
	)
}

const Sidebar = () => {
	const route = useRouter().route
	return (
		<Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: SIDEBAR_WIDTH }}>
			{Object.values(ROUTE_NAME).map((routeName) => {
				const RouteIcon = ROUTE_ICON[routeName]
				return (
					<MenuButton
						href={ROUTE[routeName]}
						isActive={route === ROUTE[routeName]}
						key={routeName}
					>
						<RouteIcon />
					</MenuButton>
				)
			})}
		</Box>
	)
}

export default Sidebar
