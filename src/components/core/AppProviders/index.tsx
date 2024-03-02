'use client'
import '@/styles/global.css'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'

import { PlayerProvider } from '../Player/PlayerProvider'

import { apollo } from '@/libs/apollo'
import theme from '@/styles/theme'

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
