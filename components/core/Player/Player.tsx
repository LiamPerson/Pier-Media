'use client'

import { Paper } from '@mui/material'
import { PlayerContent } from './PlayerContent'
import { usePlayer } from './usePlayer'

type Props = {
	children: React.ReactNode
}
export const Player = ({ children }: Props) => {
	const { src } = usePlayer()
	return (
		<>
			{children}
			<Paper
				id={'helol!'}
				sx={{ width: '100%', position: 'sticky', bottom: '0', right: '0' }}
			>
				<PlayerContent src={src} />
			</Paper>
		</>
	)
}
