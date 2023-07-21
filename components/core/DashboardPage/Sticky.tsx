import { Box, BoxProps } from '@mui/material'

interface StickyProps {
	children: React.ReactNode
	sx?: BoxProps['sx']
}
const Sticky = ({ children, sx }: StickyProps) => {
	return (
		<Box
			position={'sticky'}
			top={0}
			sx={sx}
		>
			{children}
		</Box>
	)
}

export default Sticky
