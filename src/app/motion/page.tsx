
"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"

const Motion = () => {
	return ( 
		<div className="grid items-center h-[100vh] gap-[0.8rem] justify-center">
			
			{/* <Button className="bg-amber-700 p-4 m-4 w-[6rem]">testing</Button> */}
			<motion.div
			initial={{
				rotate: "0deg",
				left: "0px",
				scale: 0
			}}
			animate={{
				rotate: "360deg",
				left: "auto",
				scale: 1

			}}
			transition={{
				duration: 3,
				ease: "anticipate"

			}}
			exit={{
				scale: 0
			}}
			className="w-[150px] h-[150px] bg-amber-500"></motion.div>
		</div>
	 );
}
 
export default Motion;