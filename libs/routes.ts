import HomeIcon from '@mui/icons-material/Home'
import VideocamIcon from '@mui/icons-material/Videocam'
import MovieIcon from '@mui/icons-material/Movie'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'

enum ROUTES {
	HOME = '/',
	VIDEOS = '/videos',
	MOVIES = '/movies',
	MUSIC = '/music',
}

export const ROUTE_ICONS: Record<ROUTES, typeof HomeIcon> = {
	[ROUTES.HOME]: HomeIcon,
	[ROUTES.VIDEOS]: VideocamIcon,
	[ROUTES.MOVIES]: MovieIcon,
	[ROUTES.MUSIC]: LibraryMusicIcon,
}

export default ROUTES
