import { Typography } from '@mui/material'

import TimeIcon from '@/components/shared/icons/TimeIcon'
import { secondsToTimestamp } from '@/libs/helpers'

type Props = {
	duration: number
}

const TrackCardDuration = ({ duration }: Props) => (
	<Typography sx={{ display: 'inline-block' }}>
		<TimeIcon
			width={'12px'}
			height={'12px'}
		/>{' '}
		{secondsToTimestamp(duration)}
	</Typography>
)

export default TrackCardDuration
