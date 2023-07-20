import Head from '@/components/BasePage/Head'
import { Box } from '@mui/material'
import { forwardRef } from 'react'

interface GenericPageProps {
	children: React.ReactNode
}
const BasePage = forwardRef(({ children }: GenericPageProps, ref) => {
	return (
		<Box ref={ref}>
			<Head />
			{children}
		</Box>
	)
})

BasePage.displayName = 'BasePage'

export default BasePage
