import { Media } from '@/constants/media'

/**
 * Basically a special type of array that handles media items.
 * It has a current index and can step to the next or previous item.
 */
class Playlist {
	public name: string
	public list: Media[] = []

	private _currentIndex: number = 0
	private get currentIndex(): number {
		return this._currentIndex
	}
	private set currentIndex(index: number) {
		if (index < 0) {
			this._currentIndex = 0
		}
		if (index > this.list.length - 1) {
			this._currentIndex = this.list.length - 1
		}
		this._currentIndex = index
	}

	constructor(name: string) {
		this.name = name
	}

	/**
	 * Adds items to the playlist.
	 */
	public add(...items: Media[]): void {
		this.list.push(...items)
	}

	/**
	 * Removes items from the playlist.
	 */
	public remove(...item: Media[]): void {
		for (const i of item) {
			this.removeItem(i)
		}
	}

	/**
	 * Removes an item from the internal playlist.
	 */
	private removeItem(item: Media): void {
		const deletingIndex = this.list.findIndex((i) => i === item)
		if (deletingIndex < this.currentIndex) {
			this.currentIndex -= 1
		}

		this.list = this.list.filter((i) => i !== item)
	}

	/**
	 * Gets the currently playing media item.
	 */
	public current(): Media {
		return this.list[this.currentIndex]
	}

	/**
	 * Steps to the next piece of media and returns it.
	 */
	public next(): Media {
		this.currentIndex += 1
		return this.current()
	}

	/**
	 * Steps to the previous piece of media and returns it.
	 */
	public previous(): Media {
		this.currentIndex -= 1
		return this.current()
	}
}

export default Playlist
