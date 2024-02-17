import { useContext } from 'react'
import { PlayerContext } from './provider'

export const usePlayer = () => {
	return useContext(PlayerContext)
}
