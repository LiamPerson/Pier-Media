import { Box, Paper } from '@mui/material'

interface StickyPageProps {
	children: React.ReactNode
}

const StickyPage = ({ children }: StickyPageProps) => {
	return (
		<Box position={'relative'}>
			<Box sx={{ position: 'sticky', top: 0 }}>{children}</Box>
		</Box>
	)
}

export default StickyPage
