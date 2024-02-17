import { SVGAttributes } from 'react'

const TvIcon = (props: SVGAttributes<SVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 512 512'
		{...props}
	>
		<title>Tv</title>
		<rect
			x='32'
			y='96'
			width='448'
			height='272'
			rx='32.14'
			ry='32.14'
			fill='none'
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth='32'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeMiterlimit='10'
			strokeWidth='32'
			d='M128 416h256'
		/>
	</svg>
)

export default TvIcon
