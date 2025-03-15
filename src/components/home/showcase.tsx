import Image from "next/image";

import desktop from "../../../public/desktop.webp";
import laptop from "../../../public/laptop.webp";
import macbook from "../../../public/macbook.webp";
import monitor from "../../../public/monitor.webp";
import printer from "../../../public/printer.webp";
import scanner from "../../../public/scanner.webp";
import scribble from "../../../public/scribble.webp";
import starlink from "../../../public/starlink.webp";

import { Grid } from "lucide-react";
import { Button } from "../ui/button";

const showcaseSection = [
	{
		name: "Laptop",
		link: "/",
		image: laptop,
		color: "#009B93",
	},
	{
		name: "Monitor",
		link: "/",
		image: monitor,
		color: "#04325C"
	},
	{
		name: "Macbook",
		link: "/",
		image: macbook,
		color: "#0E0F11"
	},
	{
		name: "Internet",
		link: "/",
		image: starlink,
		color: "#4B5162"
	},


]

const Showcase = () => {
	return (
		<div>
			<div className="flex flex-col items-center py-4 mt-[2rem]">
				<h2 className="font-medium text-[30px]">All in one tech store</h2>
				<Image
					src={scribble}
					alt="scribble line"
					className="mt-[-2rem]"
				></Image>

				<p className="text-center w-[70%] text-[#5B5B5B] mt-7">
					Discover a wide range of high-quality IT devices, from laptops and
					accessories to networking solutions. Whether for business or personal
					use, we have the right technology to keep you connected, efficient,
					and ahead of the curve.
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
				{showcaseSection.map((item, key) => {
					return (
						<div key={key} className="flex flex-col object-contain items-center text-white p-2 rounded-lg shadow-lg"
							style={{
								background: `linear-gradient(${item.color}, #D9D9D9) `
							}}>
							<h3 className="font-semibold mt-2 text-[16px]">{item.name}</h3>
							<Button className="bg-[#3771C8] text-[10px] my-1 px-2 py-1">Show more</Button>
							<Image src={item.image} alt={item.name} className="mb-2 w-full h-auto object-contain"></Image>
						</div>
					)
				})}
			</div>
		</div>

	);
};

export default Showcase;
