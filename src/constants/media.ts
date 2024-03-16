export const MediaType = {
	VIDEO: 'video',
	AUDIO: 'audio',
} as const

export type MediaType = (typeof MediaType)[keyof typeof MediaType]

export interface BaseMedia {
	id: number
	type: MediaType
}

export interface AudioMedia extends BaseMedia {
	type: 'audio'
}

export interface VideoMedia extends BaseMedia {
	type: 'video'
}

export type Media = AudioMedia | VideoMedia
