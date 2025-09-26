import { Box, Container } from "@mui/material";
import ThemeRegistry from "./ThemeRegistry.jsx";
import LayoutWrapper from "./layout/layout-wrapper.jsx";
import LandingPage from "./LandingPage.jsx";

function App() {
	return (
		<ThemeRegistry>
			<LayoutWrapper>
				<LandingPage />
			</LayoutWrapper>
		</ThemeRegistry>
	);
}

export default App;
