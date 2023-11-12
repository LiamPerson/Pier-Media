import { createTheme } from '@mui/material'
import { BACKGROUND } from './color'

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#26a6d8',
		},
		secondary: {
			main: '#ff9734',
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					backgroundColor: BACKGROUND.DEFAULT,
					backgroundImage: 'linear-gradient(rgba(144, 144, 180, 0.09), rgba(2, 2, 8, 0.09));',
				},
			},
		},
	},
})

export default theme
