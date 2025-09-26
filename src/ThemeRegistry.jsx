import { ThemeProvider, createTheme } from "@mui/material";
import { color } from "./lib/color";

let theme = createTheme();
theme = createTheme({
	palette: {
		primary: {
			main: color.primary,
			contrastText: color.white,
		},
		secondary: {
			main: color.secondary,
			contrastText: color.white,
		},
	},
	typography: {
		fontFamily: "inter, sans serif",
		h1: {
			fontSize: 60,
			fontWeight: 900,
			[theme.breakpoints.down("md")]: {
				fontSize: 45,
			},
			[theme.breakpoints.down("sm")]: {
				fontSize: 33,
			},
		},
		h2: {
			fontSize: 48,
			fontWeight: 700,
			[theme.breakpoints.down("md")]: {
				fontSize: 35,
			},
			[theme.breakpoints.down("sm")]: {
				fontSize: 26,
			},
		},
		h3: {
			fontSize: 30,
			fontWeight: 700,
			[theme.breakpoints.down("md")]: {
				fontSize: 28,
			},
			[theme.breakpoints.down("sm")]: {
				fontSize: 26,
			},
		},
		h4: {
			fontSize: 28,
			fontWeight: 600,
			[theme.breakpoints.down("md")]: {
				fontSize: 26,
			},
			[theme.breakpoints.down("sm")]: {
				fontSize: 22,
			},
		},
		h5: {
			fontSize: 24,
			fontWeight: 600,
			[theme.breakpoints.down("md")]: {
				fontSize: 18,
			},
			[theme.breakpoints.down("sm")]: {
				fontSize: 16,
			},
		},
		h6: {
			fontSize: 20,
			fontWeight: 500,
			[theme.breakpoints.down("md")]: {
				fontSize: 18,
			},
			[theme.breakpoints.down("sm")]: {
				fontSize: 16,
			},
		},
		subtitle1: {
			fontSize: 19,
			fontWeight: 600,
			[theme.breakpoints.down("sm")]: {
				fontSize: 14,
			},
		},
		subtitle2: {
			fontSize: 16,
			fontWeight: 400,
			[theme.breakpoints.down("md")]: {
				fontSize: 15,
			},
		},
		body1: {
			fontSize: 16,
			fontWeight: 400,
			[theme.breakpoints.down("md")]: {
				fontSize: 14,
			},
		},
		body2: {
			fontSize: 14,
			fontWeight: 400,
			[theme.breakpoints.down("md")]: {
				fontSize: 12,
			},
		},
		caption: {
			fontSize: 12,
			fontWeight: 300,
			[theme.breakpoints.down("md")]: {
				fontSize: 10,
			},
		},
		overline: {
			fontSize: 10,
			fontWeight: 300,
		},
	},
});

function ThemeRegistry({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeRegistry;
