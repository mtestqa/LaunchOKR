import ThemeRegistry from "./ThemeRegistry.jsx";
import LayoutWrapper from "./layout/layout-wrapper.jsx";
import LandingPage from "./LandingPage.jsx";
import { ToasterContainer } from "./components/Toaster/index.jsx";

function App() {
	return (
		<ThemeRegistry>
			<ToasterContainer />
			<LayoutWrapper>
				<LandingPage />
			</LayoutWrapper>
		</ThemeRegistry>
	);
}

export default App;
