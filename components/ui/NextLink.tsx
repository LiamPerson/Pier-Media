import Link from 'next/link'
import { ComponentProps } from 'react'

type NextLinkProps = {
	children: React.ReactNode
} & ComponentProps<typeof Link>
const NextLink = ({ children, style, ...props }: NextLinkProps) => {
	return (
		<Link
			style={{ textDecoration: 'none', color: 'unset', ...style }}
			{...props}
		>
			{children}
		</Link>
	)
}

export default NextLink
