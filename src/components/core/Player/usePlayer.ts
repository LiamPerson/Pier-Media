import { useContext } from 'react'

import { PlayerContext } from './PlayerProvider'

export const usePlayer = () => {
	return useContext(PlayerContext)
}
