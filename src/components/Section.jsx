import "./section.css";
import SubSection from "./SubSection";
import graphic_image from "../image_files/desktop/image-graphic-design.jpg";
import orange_image from "../image_files/desktop/image-photography.jpg";
import egg_image from "../image_files/desktop/image-transform.jpg";
import cup_image from "../image_files/desktop/image-stand-out.jpg";
const section_details = [
	{
		title: "Transform your brand",
		paragraph:
			"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
		id: "transform",
		url: "https://www.google.com",
		urltext: "Learn more",
	},
	{
		title: "Stand out to the right audience",
		paragraph:
			"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
		id: "stand",
		url: "https://www.google.com",
		urltext: "Learn more",
	},
	{
		title: "Graphic design",
		paragraph:
			"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
		id: "Graphic",
		background: graphic_image,
	},
	{
		title: "Photography",
		paragraph:
			"Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
		id: "Photography",
		background: orange_image,
	},
];

function Section() {
	const sectionFilter = (id) => (item) => item.id === id;
	return (
		<section className="section" id="section">
			<SubSection
				Details={section_details.filter(sectionFilter("transform"))}
			/>
			<img className="oranges" src={egg_image} alt="Orages" />
			<img src={cup_image} alt="Cup" />
			<SubSection Details={section_details.filter(sectionFilter("stand"))} />
			<SubSection Details={section_details.filter(sectionFilter("Graphic"))} />
			<SubSection
				Details={section_details.filter(sectionFilter("Photography"))}
			/>
		</section>
	);
}
export default Section;
