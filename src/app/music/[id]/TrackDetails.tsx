import { GenreSelect } from './GenreSelect'

import { GetTracksQuery, Maybe } from '@/gql/codegen/graphql'
import { ValueOf } from '@/libs/types'

type Props = {
	track?: Maybe<ValueOf<GetTracksQuery['tracks']>>
}
export const TrackDetails = ({ track }: Props) => {
	if (!track) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<p>Duration: {track.duration} seconds</p>
			<p>Bitrate: {track.bitrate} bits/second</p>
			<GenreSelect
				trackId={track.id}
				defaultGenre={track.genre}
			/>
			{track.contributors?.map((contributor) => {
				if (!contributor) {
					return null
				}
				return <p key={contributor.id}>{contributor.name}</p>
			})}
		</div>
	)
}
