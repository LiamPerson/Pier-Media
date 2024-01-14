import { AudioMedia, BaseMedia, VideoMedia } from '@/constants/media'

// Use a type guard to check the type of media
export function isAudioMedia(media: BaseMedia): media is AudioMedia {
	return media.type === 'audio'
}

export function isVideoMedia(media: BaseMedia): media is VideoMedia {
	return media.type === 'video'
}
