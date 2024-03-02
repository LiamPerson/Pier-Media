'use client'
import { createContext } from 'react'

import { usePlaylist } from './usePlaylist'

import { Media } from '@/constants/media'

type ContextType = {
	current: Media | null
	jumpTo: ReturnType<typeof usePlaylist>['jumpTo']
	next: ReturnType<typeof usePlaylist>['next']
	previous: ReturnType<typeof usePlaylist>['previous']
	add: ReturnType<typeof usePlaylist>['add']
	remove: ReturnType<typeof usePlaylist>['remove']
	playlist: ReturnType<typeof usePlaylist>['playlist']
}
export const PlayerContext = createContext<ContextType>({
	current: null,
	jumpTo: () => {},
	next: () => {},
	previous: () => {},
	add: () => {},
	remove: () => {},
	playlist: [],
})

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
	const { jumpTo, current, next, previous, add, remove, playlist } = usePlaylist()
	return <PlayerContext.Provider value={{ current, jumpTo, next, previous, add, remove, playlist }}>{children}</PlayerContext.Provider>
}
