import { Box } from '@mui/material'
import { HEADER_HEIGHT } from './constants'

interface HeaderProps {
	width: number // in pixels
}
const Header = ({ width }: HeaderProps) => (
	<Box sx={{ position: 'absolute', top: 0, left: 0, height: HEADER_HEIGHT, width, background: 'yellow' }}>9999999999999999999999999999</Box>
)

export default Header
