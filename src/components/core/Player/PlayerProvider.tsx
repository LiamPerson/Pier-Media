'use client'
import { createContext, useState } from 'react'

import { Media } from '@/constants/media'

type Props = {
	children: React.ReactNode
}

type ContextType = {
	media: Media | null
	setMedia: React.Dispatch<React.SetStateAction<Media | null>>
}
export const PlayerContext = createContext<ContextType>({ media: null, setMedia: () => {} })

export const PlayerProvider = ({ children }: Props) => {
	const [media, setMedia] = useState<Media | null>(null)
	return <PlayerContext.Provider value={{ media: media, setMedia: setMedia }}>{children}</PlayerContext.Provider>
}
