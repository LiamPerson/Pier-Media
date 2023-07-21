import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { HEADER_HEIGHT } from './constants'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'

interface HeaderProps {
	width: number // in pixels
}
const Header = ({ width }: HeaderProps) => (
	<AppBar sx={{ position: 'absolute', top: 0, left: 0, height: HEADER_HEIGHT, width }}>
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
			<Image
				src='/logo512.png'
				alt='logo'
				width={50}
				height={50}
			/>
			<Button
				sx={{ marginLeft: 'auto' }}
				color='inherit'
			>
				Login
			</Button>
		</Toolbar>
	</AppBar>
)

export default Header
