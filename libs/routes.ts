import HomeIcon from '@mui/icons-material/Home'
import VideocamIcon from '@mui/icons-material/Videocam'
import MovieIcon from '@mui/icons-material/Movie'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'

export enum ROUTE_NAME {
	HOME = 'Home',
	VIDEOS = 'Videos',
	MOVIES = 'Movies',
	MUSIC = 'Music',
}

export const ROUTE: Record<ROUTE_NAME, string> = {
	[ROUTE_NAME.HOME]: '/',
	[ROUTE_NAME.VIDEOS]: '/videos',
	[ROUTE_NAME.MOVIES]: '/movies',
	[ROUTE_NAME.MUSIC]: '/music',
}

export const ROUTE_ICON: Record<ROUTE_NAME, typeof HomeIcon> = {
	[ROUTE_NAME.HOME]: HomeIcon,
	[ROUTE_NAME.VIDEOS]: VideocamIcon,
	[ROUTE_NAME.MOVIES]: MovieIcon,
	[ROUTE_NAME.MUSIC]: LibraryMusicIcon,
}
