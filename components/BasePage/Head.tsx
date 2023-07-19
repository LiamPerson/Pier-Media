import NextHead from 'next/head'

const Head = () => {
	return (
		<NextHead>
			<link
				rel='icon'
				href='/logo512.png'
			/>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<meta
				name='theme-color'
				content='#000000'
			/>
			<meta
				name='description'
				content='Web site created using create-react-app'
			/>
			<link
				rel='apple-touch-icon'
				href='/logo192.png'
			/>
			<link
				rel='manifest'
				href='/manifest.json'
			/>
			<title>Pier</title>
		</NextHead>
	)
}

export default Head
