import { Box, Typography, alpha } from '@mui/material'
import { HEADER_HEIGHT_PX, SIDEBAR_WIDTH_PX } from './constants'
import { ROUTE, ROUTE_ICON, ROUTE_NAME } from '@/libs/routes'
import { useRouter } from 'next/router'
import { BACKGROUND } from '@/styles/color'
import NextLink from '@/components/ui/NextLink'

interface MenuButtonProps {
	isActive: boolean
	children: React.ReactNode
	href: string
}
const MenuItem = ({ isActive, children, href }: MenuButtonProps) => {
	return (
		<NextLink href={href}>
			<Box
				sx={{
					background: isActive ? '#ffffff22' : undefined,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					pt: '10px',
					pb: '5px',
					transition: '0.2s',
					'&:hover': {
						background: '#ffffff22',
						pl: '5px',
					},
				}}
			>
				{children}
			</Box>
		</NextLink>
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
					<MenuItem
						href={ROUTE[routeName]}
						isActive={route === ROUTE[routeName]}
						key={routeName}
					>
						<RouteIcon
							width={25}
							height={25}
						/>
						<Typography variant='caption'>{routeName}</Typography>
					</MenuItem>
				)
			})}
		</Box>
	)
}

export default Sidebar
