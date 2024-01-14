'use client'
import '@/styles/global.css'
import { ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'
import { ApolloProvider } from '@apollo/client'
import apollo from '@/libs/apollo'
import { PlayerProvider } from '../Player/provider'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<ApolloProvider client={apollo}>
			<PlayerProvider>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</PlayerProvider>
		</ApolloProvider>
	)
}

export default AppProviders
