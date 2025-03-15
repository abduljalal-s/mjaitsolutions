import Image from "next/image";

import msm from "../../../public/msm.webp";
import partners from "../../../public/smallPartners.webp";
const Bottom = () => {
	return ( 
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 w-[85%] mx-auto text-[14px] gap-8 my-[6rem]">
				<div className="">
					<h4 className="font-semibold text-[20px]">Technological Partnerships</h4>
					<p className="py-3">MJA IT Solutions partners with leading technology providers to offer the best solutions available in the industry:</p>

					<p className="py-3"><span className="font-semibold">Microsoft:</span> Cloud services, software and enterprise solutions</p>
					<p className="py-3"><span className="font-semibold">Amazon Web Services (AWS):</span> Scalable and secure cloud infrastructure</p>
					<p className="py-3"><span className="font-semibold">Cisco:</span> Networking solutions, security and IT  infrastructure</p>
					<p className="py-3"><span className="font-semibold">Google Cloud:</span>  Cloud services and AI tools</p>

					<Image src={partners} alt="logos of partners" className="mt-8 mx-auto lg:mx-0"></Image>
				</div>
				<div className="flex justify-center">
					<Image src={msm} alt="two men wearing suit shaking each others hands"></Image>
				</div>
			</div>
		</div>
	 );
}
 
export default Bottom;