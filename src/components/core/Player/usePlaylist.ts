import { useState } from 'react'

import { Media } from '@/constants/media'
import { clamp, shuffle as shuffleArray } from '@/libs/helpers'

/**
 * @todo - Anyone: The architecture here sucks.
 * It is hard to tell when the index change will fail due to a de-sync in the state change.
 */
export const usePlaylist = () => {
	const [playlist, setPlaylist] = useState<Media[]>([])
	const [currentIndex, setCurrentIndex] = useState<number>(0)

	/**
	 * Plays a specific index in the playlist.
	 * We require the playlist as an argument to ensure that the index is valid.
	 */
	const play = (index: number, targetPlaylist: Media[]) => {
		setCurrentIndex(clamp(index, 0, targetPlaylist.length - 1))
	}

	/**
	 * Jumps to a specific index in the playlist.
	 */
	const jumpTo = (index: number) => {
		play(index, playlist)
	}

	/**
	 * Adds a media item to the playlist.
	 */
	const add = (media: Media, jump = true) => {
		const newPlaylist = [...playlist, media]
		setPlaylist(newPlaylist)
		if (jump) {
			play(newPlaylist.length - 1, newPlaylist)
		}
	}

	/**
	 * Removes a media item from the playlist.
	 */
	const remove = (index: number, jump = true) => {
		const newPlaylist = playlist.filter((_, i) => i !== index)
		setPlaylist(newPlaylist)
		if (jump && currentIndex >= index) {
			play(currentIndex - 1, newPlaylist)
		}
	}

	/**
	 * Steps to the next piece of media in the playlist relative to the current index.
	 */
	const next = () => {
		if (currentIndex < playlist.length - 1) {
			play(currentIndex + 1, playlist)
		}
	}

	/**
	 * Steps to the previous piece of media in the playlist relative to the current index.
	 */
	const previous = () => {
		if (currentIndex > 0) {
			play(currentIndex - 1, playlist)
		}
	}

	const clear = () => {
		const newPlaylist = [] as Media[]
		setPlaylist(newPlaylist)
		play(0, newPlaylist)
	}

	const shuffle = () => {
		setPlaylist(shuffleArray(playlist))
	}

	/**
	 * The currently playing media item.
	 */
	const current = playlist[currentIndex]

	return {
		playlist,
		setPlaylist,
		current,
		jumpTo,
		next,
		previous,
		add,
		remove,
		clear,
		shuffle,
	}
}
