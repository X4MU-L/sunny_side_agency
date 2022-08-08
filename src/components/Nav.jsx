import "./Nav.css";
function Nav({ nav_links }) {
	return (
		<ul className="main_nav">
			{nav_links.map((element) => (
				<li key={element}>
					<span>{element}</span>
				</li>
			))}
		</ul>
	);
}
export default Nav;
