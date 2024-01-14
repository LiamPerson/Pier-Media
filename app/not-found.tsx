import NextLink from 'next/link'

const NotFound = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<NextLink href='/'>Return Home</NextLink>
			{children}
		</div>
	)
}

export default NotFound
