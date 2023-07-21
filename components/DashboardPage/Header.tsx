import { Paper } from '@mui/material'
import { HEADING_HEIGHT } from './constants'

interface HeaderProps {
	width: number // in pixels
}
const Header = ({ width }: HeaderProps) => (
	<Paper sx={{ position: 'absolute', top: 0, left: 0, height: HEADING_HEIGHT, width, background: 'yellow' }}>
		9999999999999999999999999999
	</Paper>
)

export default Header