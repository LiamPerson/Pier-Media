import { GenreSelect } from './GenreSelect'

import { GetAudiosQuery, Maybe } from '@/gql/codegen/graphql'
import { ValueOf } from '@/libs/types'

type Props = {
	audio?: Maybe<ValueOf<GetAudiosQuery['audios']>>
}
export const AudioDetails = ({ audio }: Props) => {
	if (!audio) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<p>Duration: {audio.duration} seconds</p>
			<p>Bitrate: {audio.bitrate} bits/second</p>
			<GenreSelect
				audioId={audio.id}
				defaultGenre={audio.genre}
			/>
			{audio.contributors?.map((contributor) => {
				if (!contributor) {
					return null
				}
				return <p key={contributor.id}>{contributor.name}</p>
			})}
		</div>
	)
}
