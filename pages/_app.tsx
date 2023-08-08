import type { AppProps } from 'next/app'
import '@/styles/global.css'
import { ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'
import { ApolloProvider } from '@apollo/client'
import apollo from '@/libs/apollo'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apollo}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	)
}
