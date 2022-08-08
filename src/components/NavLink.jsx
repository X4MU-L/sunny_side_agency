import "./NavLink.css";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import hambugerMenu from "../image_files/icon-hamburger.svg";
import NavMobile from "./NavMobile";

function NavLink({ nav_links, logo }) {
	const [isMobile, setIsMobile] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	//choose the screen size
	const handleResize = () => {
		if (window.innerWidth < 699) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
			setMenuOpen(false);
		}
	};

	// create an event listener
	useEffect(() => {
		window.addEventListener("resize", handleResize);
	}, [isMobile]);

	return (
		<nav className="nav">
			<img src={logo} alt="Sunny Side Logo" />
			<img
				onClick={() => setMenuOpen(!menuOpen)}
				src={hambugerMenu}
				alt="Menu icon"
				className="mobile_toggle"
			/>
			{!menuOpen && !isMobile && <Nav nav_links={nav_links} />}
			{menuOpen && isMobile && <NavMobile nav_links={nav_links} />}
		</nav>
	);
}
export default NavLink;
