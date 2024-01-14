import { AudioMedia, BaseMedia, MediaType, VideoMedia } from '@/constants/media'

// Use a type guard to check the type of media
export function isAudioMedia(media: BaseMedia): media is AudioMedia {
	return media.type === MediaType.AUDIO
}

export function isVideoMedia(media: BaseMedia): media is VideoMedia {
	return media.type === MediaType.VIDEO
}
