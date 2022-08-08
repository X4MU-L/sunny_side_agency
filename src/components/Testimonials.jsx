import "./testimonials.css";

import emily_image from "../image_files/image-emily.jpg";
import thomas_image from "../image_files/image-thomas.jpg";
import jennie_image from "../image_files/image-jennie.jpg";

const testimonials = [
	{
		img: emily_image,
		paragraph:
			"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
		author: "Emily R.",
		title: "Marketing Director",
	},
	{
		img: thomas_image,
		paragraph:
			"Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
		author: "Thomas S.",
		title: "Chief Operating Officer",
	},
	{
		img: jennie_image,
		paragraph:
			"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
		author: "Jennie F.",
		title: "Business Owner",
	},
];

function Testimonials({ children }) {
	return (
		<section className="testimonials">
			<h3>{children}</h3>
			<div className="wrapper">
				{testimonials.map((item) => (
					<div key={item.author}>
						<img className="bio" src={item.img} alt={item.author} />
						<p className="paragraph">{item.paragraph}</p>
						<div>
							<p className="author">{item.author}</p>
							<p className="title">{item.title}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
export default Testimonials;
