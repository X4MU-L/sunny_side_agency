function Herotext({ title, hero_arrow }) {
	return (
		<>
			<h1
				style={{
					fontFamily: "Fraunces",
					fontWeight: "700",
					fontSize: "40px",
					letterSpacing: "6px",
					textAlign: "center",
				}}
			>
				{title}
			</h1>
			<a href=".section">
				<img src={hero_arrow} alt="Down Navigation arrow" />
			</a>
		</>
	);
}
export default Herotext;
