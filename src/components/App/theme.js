import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
			main: '#008ab7'
		},
		secondary: {
			main: '#4c2a74',
			light: '#d2cadc',
		},
		gold: {
			main: '#ffc432'
		},
		background: {
			default: '#fff',
		},
	},
	typography: {
		fontFamily: `"Lato", "Roboto", "Helvetica", "Arial", sans-serif`,
		h4: {
			textTransform: 'uppercase',
		},
		h5: {
			color: "#fff",
			fontWeight: 700,
			fontSize: '1.5rem',
			letterSpacing: '0em',
			lineHeight: 1,
		},
		body1Next: {
			color: '#fff',
			fontWeight: 300,
			fontSize: '1rem',
			letterSpacing: '0em',
			lineHeight: 1,
		},
		body1: {
			color: '#fff',
			fontWeight: 300,
			fontSize: '1rem',
			letterSpacing: '0em',
			lineHeight: 1,
		},
		useNextVariants: true,
	},
	shape: {
		borderRadius: 2,
	},
});

export default theme;