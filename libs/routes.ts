import CogIcon from '@/components/shared/icons/CogIcon'
import HomeIcon from '@/components/shared/icons/HomeIcon'
import MovieIcon from '@/components/shared/icons/MovieIcon'
import MusicIcon from '@/components/shared/icons/MusicIcon'
import VideoIcon from '@/components/shared/icons/VideoIcon'

export enum ROUTE_NAME {
	HOME = 'Home',
	VIDEOS = 'Videos',
	MOVIES = 'Movies',
	MUSIC = 'Music',
	SETTINGS = 'Settings',
}

export const ROUTE: Record<ROUTE_NAME, string> = {
	[ROUTE_NAME.HOME]: '/',
	[ROUTE_NAME.VIDEOS]: '/videos',
	[ROUTE_NAME.MOVIES]: '/movies',
	[ROUTE_NAME.MUSIC]: '/music',
	[ROUTE_NAME.SETTINGS]: '/settings',
}

export const ROUTE_ICON: Record<ROUTE_NAME, typeof HomeIcon> = {
	[ROUTE_NAME.HOME]: HomeIcon,
	[ROUTE_NAME.VIDEOS]: VideoIcon,
	[ROUTE_NAME.MOVIES]: MovieIcon,
	[ROUTE_NAME.MUSIC]: MusicIcon,
	[ROUTE_NAME.SETTINGS]: CogIcon,
}
