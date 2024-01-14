import { AppBar, IconButton, Paper, Toolbar, Typography } from '@mui/material'
import { HEADER_HEIGHT, HEADER_HEIGHT_PX } from './constants'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
import { ROUTE } from '@/libs/routes'
import SiteSearch from './SiteSearch'
import NextLink from '@/components/shared/NextLink'

interface HeaderProps {
	width: number // in pixels
}
const Header = ({ width }: HeaderProps) => (
	<AppBar sx={{ position: 'absolute', top: 0, left: 0, height: HEADER_HEIGHT_PX, width }}>
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
			<NextLink
				style={{ display: 'flex', alignItems: 'center' }}
				href={ROUTE.Home}
			>
				<Image
					src='/logo512.png'
					alt='logo'
					width={HEADER_HEIGHT - 10}
					height={HEADER_HEIGHT - 10}
				/>
				<Typography variant='h4'>Pier</Typography>
			</NextLink>
			<Paper sx={{ marginLeft: 'auto' }}>
				<SiteSearch />
			</Paper>
		</Toolbar>
	</AppBar>
)

export default Header
