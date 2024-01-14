'use client'
import { createContext, useState } from 'react'

type Props = {
	children: React.ReactNode
}

type ContextType = {
	src: string | null
	setSrc: React.Dispatch<React.SetStateAction<string | null>>
}
export const PlayerContext = createContext<ContextType>({ src: null, setSrc: () => {} })

export const PlayerProvider = ({ children }: Props) => {
	const [src, setSrc] = useState<string | null>(null)
	return <PlayerContext.Provider value={{ src, setSrc }}>{children}</PlayerContext.Provider>
}
