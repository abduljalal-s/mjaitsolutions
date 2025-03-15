import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/bigLogo.webp";

const links = [
	{
		name: "HOME",
		link: "/",
	},
	{
		name: "SERVICES",
		link: "/services",
	},
	{
		name: "ABOUT",
		link: "/about",
	},
	{
		name: "CONTACT",
		link: "/contact",
	},

]

const Navbar = () => {
	return (
		<div className=" flex justify-between flex-row bg-transparent absolute top-4 left-[50%] translate-x-[-50%] z-50">

			{/* <div className="w-[50%] p-0">
				<Image src={logo} alt="mja logo" className="p-0"></Image>
			</div> */}
			<div className="flex justify-around flex-row gap-4 items-center">
				{links.map((link, key) => <Link key={key} href={link.link} className={`text-white font-bold transition-transform translate-y-4 delay-[${10 * key}]`}>{link.name}</Link>)}

			</div>


		</div>
	);
}

export default Navbar;