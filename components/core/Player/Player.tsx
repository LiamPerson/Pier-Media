'use client'

import { PlayerOverlay } from './Overlay'
import { usePlayer } from './usePlayer'

type Props = {
	children: React.ReactNode
}
export const Player = ({ children }: Props) => {
	const { src } = usePlayer()
	return (
		<>
			{children}
			<PlayerOverlay src={src} />
		</>
	)
}
