"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "../ui/button";


import avatar from "../../../public/avatar.webp";
import bigCloud from "../../../public/bigCloud.webp";
import heroImg from "../../../public/heroImg.webp";

import { motion } from "framer-motion";
import logo from "../../../public/bigLogo.webp";
import background from "../../../public/heroBackground.webp";

const Hero = () => {
	return (
		<div className="bg-[#1D58CF] text-white flex flex-col justify-center overflow-hidden relative pt-[6rem] lg:py-[6rem] font-pop lg:h-[100vh] h-auto"
			style={{
				background: `url(${background.src})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "top"

			}}>
			<div
				className="w-[15%] ml-[5%]">
				<Image src={logo} alt="mja logo" className="p-0 animate-bounce"></Image>
			</div>
			<div


				className="ml-[5%] mt-[2rem] lg:mt-[3rem] relative w-[50%] animate-bounce">
				<h1 className="font-extrabold text-[3rem] sm:text-[4rem] sm:leading-[4rem] lg:text-[6rem] leading-[3rem] lg:leading-[6rem] my-3">Innovating Tomorrow</h1>
				<p className="text-[22px] lg:w-[50%]">
					Innovate. Secure. Transform Your IT Partner</p>

			</div>
			<div className="flex justify-end">
				<Image

					src={heroImg}
					alt="guy wearing black hoodie with VR"
					className=" hidden lg:block lg:w-[60%] lg:right-[-4rem] xl:right-0 xl:w-[55%] 2xl:w-[45%] pt-[-5rem] absolute z-30 lg:top-[20%] xl:top-[10%] right-0 animate-pulse"
				></Image>
				<Image
					src={heroImg}
					alt="guy wearing black hoodie with VR"
					className="relative right-0 lg:hidden animate-pulse"
				></Image>
				{/*<Image src={bigCloud} alt="big cloud" className="bottom-0 left-[-50%] absolute z-10 w-[80%]"></Image >
					<Image src={bigCloud} alt="small cloud" className="top-[40%] right-[-30%] absolute z-10 w-[80%]"></Image> */}
			</div>


		</div>
	);
};

export default Hero;


{/* Empowering businesses with cutting-edge IT solutions for a smarter,
          safer, and more efficient future. */}


{/* <div className="flex flex-row items-center gap-2 my-4">
  <div className="flex flex-row">
	<Avatar>
	  <AvatarImage src={avatar.src} />
	  <AvatarFallback>AV</AvatarFallback>
	</Avatar>
	<Avatar className="-ml-3">
	  <AvatarImage src={avatar.src} />
	  <AvatarFallback>AV</AvatarFallback>
	</Avatar>
	<Avatar className="-ml-3">
	  <AvatarImage src={avatar.src} />
	  <AvatarFallback>AV</AvatarFallback>
	</Avatar>
	<Avatar className="-ml-3">
	  <AvatarImage src={avatar.src} />
	  <AvatarFallback>AV</AvatarFallback>
	</Avatar>
	<Avatar className="-ml-3">
	  <AvatarImage src={avatar.src} />
	  <AvatarFallback>AV</AvatarFallback>
	</Avatar>
  </div>

  <p className="text-[14px]">Trusted by 540+ people </p>
</div> */}

{/* <Button className="bg-transparent border-2 border-white text-[13px] font-semibold">
  Get Started
</Button> */}