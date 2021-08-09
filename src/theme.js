import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const primaryColor = '#00CC65';
const secondaryColor = '#037EF3';
// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: `${primaryColor}`,
		},
		secondary: {
			main: `${secondaryColor}`,
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#ffffef',
		},
	},
});

export default theme;
