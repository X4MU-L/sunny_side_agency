import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pictures from "./components/Pictures";
import Section from "./components/Section";
import sunnyLogo from "../src/image_files/logo.svg";
import { socials } from "./components/SocialLinks";
import Testimonials from "./components/Testimonials";
const nav_links = ["About", "Services", "Projects", "Contact"];
function App() {
	return (
		<div className="App">
			<Hero logo={sunnyLogo} nav_links={nav_links} />
			<Section />
			<Testimonials>Client testimonials</Testimonials>
			<Pictures />
			<Footer
				logo={sunnyLogo}
				socials={socials}
				nav_links={nav_links.filter((links) => links !== "Contact")}
			/>
		</div>
	);
}

export default App;
