'use client'

import { Paper } from '@mui/material'

import { PlayerContent } from './PlayerContent'

type Props = {
	children: React.ReactNode
}
export const Player = ({ children }: Props) => {
	return (
		<>
			{children}
			<Paper sx={{ width: '100%', position: 'sticky', bottom: '0', right: '0' }}>
				<PlayerContent />
			</Paper>
		</>
	)
}
