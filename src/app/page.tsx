import { Box, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

import DashboardPage from '@/components/core/DashboardPage'
import NextLink from '@/components/shared/NextLink'
import { ROUTE } from '@/libs/routes'

const HomeSection = ({ title, link, children }: { title: string; link: string; children: ReactNode }) => {
	return (
		<Box>
			<NextLink href={link}>
				<Typography
					variant='h1'
					sx={{ display: 'inline-block' }}
				>
					{title}
				</Typography>
			</NextLink>
			<Box>{children}</Box>
		</Box>
	)
}

const IndexPage = () => {
	return (
		<DashboardPage>
			<Box
				sx={{
					height: '1500px',
				}}
			>
				<HomeSection
					title='Music'
					link={ROUTE.Music}
				>
					<Stack
						gap={'15px'}
						direction={'row'}
						sx={{ flexWrap: 'wrap' }}
					>
						{Array.from({ length: 20 }).map((_, index) => (
							<Box
								key={index}
								sx={{ display: 'flex', background: 'cyan', width: '100px', height: '100px' }}
							>
								A box {index}
							</Box>
						))}
					</Stack>
				</HomeSection>
			</Box>
		</DashboardPage>
	)
}

export default IndexPage
