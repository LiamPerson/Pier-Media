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
				},
			},
		},
	},
})

export default theme
