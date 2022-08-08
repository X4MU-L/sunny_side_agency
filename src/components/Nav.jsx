import "./Nav.css";
function Nav({ nav_links }) {
	return (
		<ul className="main_nav">
			{nav_links.map((element) => (
				<li key={element}>
					<a href="#">{element}</a>
				</li>
			))}
		</ul>
	);
}
export default Nav;
