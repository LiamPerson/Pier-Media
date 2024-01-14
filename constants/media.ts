export const MediaType = {
	VIDEO: 'video',
	AUDIO: 'audio',
} as const

export type MediaType = (typeof MediaType)[keyof typeof MediaType]

export interface BaseMedia {
	src: string
	title: string
	type: MediaType
}

export interface AudioMedia extends BaseMedia {
	genre: string
	artist: string
}

export interface VideoMedia extends BaseMedia {}

export type Media = AudioMedia | VideoMedia
