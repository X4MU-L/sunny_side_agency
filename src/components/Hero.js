import header_background_imgage from "../image_files/desktop/image-header.jpg";
import hero_arrow from "../image_files/icon-arrow-down.svg";
import NavLink from "./NavLink";
import Herotext from "./Herotext";
import "./Hero.css";

function Hero({ logo, nav_links }) {
	return (
		<header
			style={{
				background: `url(${header_background_imgage})`,
				height: "100vh",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<NavLink nav_links={nav_links} logo={logo} />
			<div className="center-div">
				<Herotext title={"We are creatives"} hero_arrow={hero_arrow} />
			</div>
		</header>
	);
}
export default Hero;
