import { useQuery } from '@apollo/client'

import { GetAudiosDocument } from '@/gql/codegen/graphql'

export const useAudio = (audioId: number) => {
	const { data: audioData } = useQuery(GetAudiosDocument, { variables: { where: { id: audioId } }, fetchPolicy: 'cache-only' })
	const audio = audioData?.audios[0]
	return audio
}
