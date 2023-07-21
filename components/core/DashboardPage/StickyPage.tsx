import { Box, Stack } from '@mui/material'

interface StickyPageProps {
	children: React.ReactNode
}

const StickyPage = ({ children }: StickyPageProps) => {
	return (
		<Box position={'relative'}>
			<Stack
				direction={'row'}
				sx={{ position: 'sticky', top: 0, bottom: 0 }}
			>
				{children}
			</Stack>
		</Box>
	)
}

export default StickyPage
