import { GetTracksQuery } from '@/gql/codegen/graphql'

type Thumbnail = NonNullable<GetTracksQuery['tracks'][number]>['thumbnail']

export const MediaType = {
	VIDEO: 'video',
	AUDIO: 'audio',
} as const

export type MediaType = (typeof MediaType)[keyof typeof MediaType]

export interface BaseMedia {
	id: number
	src: string
	title: string
	type: MediaType
}

export interface AudioMedia extends BaseMedia {
	genre?: string
	author: string
	type: 'audio'
	thumbnail: Thumbnail
}

export interface VideoMedia extends BaseMedia {
	type: 'video'
}

export type Media = AudioMedia | VideoMedia
