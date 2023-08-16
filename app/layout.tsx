import AppProviders from '@/components/core/AppProviders'

export const metadata = {
	title: 'Pier Media',
	description: 'An open source media server made to work on a RaspberryPi.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<AppProviders>{children}</AppProviders>
			</body>
		</html>
	)
}
