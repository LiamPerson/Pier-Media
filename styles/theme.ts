import { createTheme } from '@mui/material'

const theme = createTheme({
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
				},
			},
		},
	},
})

export default theme
