import "./pictures.css";
import cone_image from "../image_files/desktop/image-gallery-cone.jpg";
import milkbottles_image from "../image_files/desktop/image-gallery-milkbottles.jpg";
import orange_image from "../image_files/desktop/image-gallery-orange.jpg";
import sugarcubes_image from "../image_files/desktop/image-gallery-sugarcubes.jpg";
const pictures = [
	cone_image,
	milkbottles_image,
	orange_image,
	sugarcubes_image,
];
function Pictures() {
	return (
		<section className="pictures">
			{pictures.map((item) => (
				<div key={item}>
					<img src={item} alt="" />
				</div>
			))}
		</section>
	);
}
export default Pictures;
