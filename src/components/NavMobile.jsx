import "./NavMobile.css";
function NavMobile({ nav_links }) {
	return (
		<div className="nav_mobile">
			<ul>
				{nav_links.map((element) => (
					<li key={element}>
						<a href="#">{element}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
export default NavMobile;
