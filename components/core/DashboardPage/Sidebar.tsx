import { Box, Button, alpha } from '@mui/material'
import { HEADER_HEIGHT_PX, SIDEBAR_WIDTH_PX } from './constants'
import { ROUTE, ROUTE_ICON, ROUTE_NAME } from '@/libs/routes'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BACKGROUND } from '@/styles/color'

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

const HEADER_BACKGROUND_COLOR = alpha(BACKGROUND.DEFAULT, 0.9)

const Sidebar = () => {
	const route = useRouter().route
	return (
		<Box
			sx={{
				position: 'absolute',
				top: 0,
				left: 0,
				bottom: 0,
				width: SIDEBAR_WIDTH_PX,
				paddingTop: HEADER_HEIGHT_PX,
				backgroundColor: 'transparent',
				backgroundImage: `linear-gradient(${HEADER_BACKGROUND_COLOR}, rgba(5, 5, 9, 0.8));`,
			}}
		>
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
