import { GetTracksQuery, Maybe } from '@/gql/codegen/graphql'

type Props = {
	track?: Maybe<GetTracksQuery['tracks'][number]>
}
export const TrackDetails = ({ track }: Props) => {
	if (!track) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<p>Duration: {track.duration} seconds</p>
			<p>Bitrate: {track.bitrate} bits/second</p>
			{track.genre ? (
				<div>
					<p>{track.genre.name}</p>
					<p>{track.genre.description}</p>
				</div>
			) : (
				<>No genre found</>
			)}
			{track.contributors?.map((contributor) => {
				if (!contributor) {
					return null
				}
				return <p key={contributor.id}>{contributor.name}</p>
			})}
		</div>
	)
}
