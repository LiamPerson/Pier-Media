'use client'
import '@/styles/global.css'
import { ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'
import { ApolloProvider } from '@apollo/client'
import apollo from '@/libs/apollo'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<ApolloProvider client={apollo}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ApolloProvider>
	)
}

export default AppProviders
