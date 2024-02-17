import { Metadata } from 'next'

import AppProviders from '@/components/core/AppProviders'
import { Player } from '@/components/core/Player/Player'

export const metadata: Metadata = {
	title: 'Pier Media',
	description: 'An open source media server made to work on a RaspberryPi.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<AppProviders>
					<Player>{children}</Player>
				</AppProviders>
			</body>
		</html>
	)
}
