import * as React from 'react'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import useTransientState from '@/hooks/useTransientState'
import { useMemo } from 'react'

const MAXIMUM_DRAWER_WIDTH = 240

const openedMixin = (theme: Theme): CSSObject => ({
	width: MAXIMUM_DRAWER_WIDTH,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
	position: 'sticky',
})

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	position: 'sticky',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

interface DrawerHeaderProps {
	anchor?: DrawerProps['anchor']
}
const DrawerHeader = styled('div')<DrawerHeaderProps>(({ theme, anchor }) => ({
	display: 'flex',
	flexDirection: anchor === 'left' ? 'row' : 'row-reverse',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	width: MAXIMUM_DRAWER_WIDTH,
	flexShrink: 0,
	top: 0,
	left: 0,
	bottom: 0,
	maxHeight: '100vh',
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}))

interface ResponsiveChevronProps {
	open?: boolean
	anchor?: DrawerProps['anchor']
}
const ResponsiveChevron = ({ open, anchor }: ResponsiveChevronProps) => {
	return useMemo(() => {
		switch (anchor) {
			case 'right':
				return open ? <ChevronRightIcon /> : <ChevronLeftIcon />
			case 'left':
			default:
				return open ? <ChevronLeftIcon /> : <ChevronRightIcon />
		}
	}, [anchor, open])
}

interface TitleBoxProps {
	open?: boolean
}
const TitleBox = styled('div')<TitleBoxProps>(({ open }) => ({
	transition: 'opacity 0.2s ease-in-out',
	opacity: open ? 1 : 0,
}))

interface MiniDrawerProps {
	children: React.ReactNode
	defaultOpen?: boolean
	anchor?: DrawerProps['anchor']
	position?: 'fixed' | 'static' | 'sticky'
	title?: React.ReactNode
	sx?: DrawerProps['sx']
}
export default function Sidebar({ children, defaultOpen, anchor, title, sx, position }: MiniDrawerProps) {
	const [open, setOpen] = useTransientState(defaultOpen, defaultOpen)

	const handleToggle = () => {
		setOpen(!open)
	}

	return (
		<Drawer
			sx={sx}
			anchor={anchor}
			variant='permanent'
			open={open}
		>
			<DrawerHeader anchor={anchor}>
				<TitleBox open={open}>{title}</TitleBox>
				<IconButton onClick={handleToggle}>
					<ResponsiveChevron
						open={open}
						anchor={anchor}
					/>
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>{children}</List>
		</Drawer>
	)
}
