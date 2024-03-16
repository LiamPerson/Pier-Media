import { useQuery } from '@apollo/client'

import { GetTracksDocument } from '@/gql/codegen/graphql'

export const useTrack = (trackId: number) => {
	const { data: audioData } = useQuery(GetTracksDocument, { variables: { where: { id: trackId } }, fetchPolicy: 'cache-only' })
	const audio = audioData?.tracks[0]
	return audio
}
