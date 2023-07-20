import { Box } from '@mui/material'

interface StickyProps {
	children: React.ReactNode
}
const Sticky = ({ children }: StickyProps) => {
	return (
		<Box
			position={'sticky'}
			top={0}
		>
			{children}
		</Box>
	)
}

export default Sticky
