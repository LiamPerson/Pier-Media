import type { AppProps } from 'next/app'
import '@/styles/global.css'
import { ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'
import queryClient from '@/libs/ReactQuery'
import { QueryClientProvider } from '@tanstack/react-query'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</QueryClientProvider>
	)
}
