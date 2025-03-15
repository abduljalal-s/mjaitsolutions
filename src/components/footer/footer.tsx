import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.webp";



const Footer = () => {
	return ( 
		<>
			<div className="bg-[#0B0A0A] pl-8 lg:p-0">
		
		<div>
			<div className="flex flex-col lg:flex-row justify-between lg:w-[95%] xl:w-[80%] mx-auto gap-8 py-[4rem]">
				<div>
					<Image src={logo} alt="logo" className="w-[100px]!"></Image>
					<p className="text-[14px] text-white w-[70%] my-6">Providing top-quality service is our highest priority. We deliver excellence that keeps you coming back.</p>
					<div className="flex flex-row gap-3">
						<FaInstagram color="white" size={28} ></FaInstagram>
						<FaXTwitter color="white" size={28}></FaXTwitter>
						<FaFacebook color="white" size={28}></FaFacebook>
						<FaLinkedinIn color="white" size={28}></FaLinkedinIn>
					</div>
				</div>
				<div className="text-white text-[14px]">
					<h4 className=" font-semibold text-[18px]">COMPANY</h4>
					<div className="flex flex-col">
					<Link href={"/"}>Home</Link>
					<Link href={"/services"}>services</Link>
					<Link href={"/about"}>About</Link>
					<Link href={"/contact"}>Contact</Link>
					</div>
					
				</div>

				<div className="text-white text-[14px]">
					<h4 className=" font-semibold text-[18px]">BUSINESS</h4>
					<div className="flex flex-col">
					<Link href={"/"}>Project</Link>
					<Link href={"/"}>Our team</Link>
					<Link href={"/"}>Faq</Link>
					<Link href={"/"}>Testimonials</Link>
					</div>
					
				</div>

				<div className="text-white text-[14px]">
					<h4 className=" font-semibold text-[18px]">LOCATION</h4>
					<p>Crownet Plaza, 3rd Floor, Wuye, FCT – Abuja.</p>
					
				</div>
			
			</div>
		</div>
		
		</div>
		<div className="bg-[#0B0A0A]">
<hr className="opacity-30"/>
<div className="text-white text-center opacity-30 text-[12px] lg:text-[14px] py-8">Copyright © 2025 MJA IT SOLUTIONS | Powered by MJA IT SOLUTIONS</div>
		</div>
		</>
	
		
	 );
}
 
export default Footer;
