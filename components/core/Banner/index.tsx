'use client'
import { Box } from '@mui/material'
import { useState } from 'react'

const Banner = () => {
	const [isActive, setIsActive] = useState(true)
	if (!isActive) return null
	return (
		<Box
			onClick={() => setIsActive(false)}
			sx={{ height: '50px', background: 'red' }}
		>
			Some announcement.
		</Box>
	)
}

export default Banner
