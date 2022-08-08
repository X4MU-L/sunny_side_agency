import "./subSection.css";
function SubSection({ Details }) {
	return (
		<div className={"sub_section"}>
			{Details.map((item) => (
				<div
					key={item.id}
					style={
						item.background
							? {
									background: `url(${item.background})`,
									backgroundSize: "cover",
									backgroundPosition: "top center",
							  }
							: null
					}
					className={item.background ? `${"with_bg"}` : `${"without_bg"}`}
				>
					<h2
						className={
							item.id === `${"Graphic"}` && item.background
								? `${"graphic_h2"}`
								: `${"photography_h2"}`
						}
					>
						{item.title}
					</h2>
					<p>{item.paragraph}</p>
					{item.url && item.urltext ? (
						<div className="links">
							<a
								href={item.url}
								className={
									item.id === `${"transform"}` ? `${"transform"}` : `${"stand"}`
								}
							>
								{item.urltext}
							</a>
						</div>
					) : null}
					{console.log(item.url)}
				</div>
			))}
		</div>
	);
}
export default SubSection;
