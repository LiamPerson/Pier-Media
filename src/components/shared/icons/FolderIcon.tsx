import { SVGAttributes } from 'react'

const FolderIcon = (props: SVGAttributes<SVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 512 512'
		{...props}
	>
		<title>Folder</title>
		<path
			d='M440 432H72a40 40 0 01-40-40V120a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H440a40 40 0 0140 40v240a40 40 0 01-40 40zM32 192h448'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='32'
		/>
	</svg>
)

export default FolderIcon
