import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import support from "../../../public/support.webp";
import network from "../../../public/network.webp";
import cloud from "../../../public/cloud.webp";
import sales from "../../../public/sales.webp";
import consultancy from "../../../public/consultancy.webp";
import solution from "../../../public/solution.webp";
import wideImg from "../../../public/servicesImg.webp";


const cards = [
	{
		header: "IT Support & Maintenance",
		body: `Ensure your business runs smoothly with
our reliable IT support and
maintenance services. We provide
timely troubleshooting, system updates,
hardware and software management,
and proactive solutions to minimize
downtime and optimize performance.`,
icon: support
	},
	{
		header: "Network Solutions",
		body: `Providing reliable and secure
networking services, including design,
implementation, and management. We
ensure seamless connectivity,
optimized performance, and robust
security for businesses of all sizes. Let
us keep your network running smoothly
and efficiently.`,
icon: network
	},
	{
		header: "Cloud Solution and Security",
		body: `Ensure seamless and efficient IT
infrastructure with our expert computer
installations and networking services.
We specialize in setting up and
configuring systems tailored to your
specific needs, whether for home,
office, or large-scale enterprises.`,
icon: cloud
	},
	{
		header: "Sales and Supply",
		body: `Experience top-notch sales and
servicing for all your technology needs.
We offer a wide selection of high-quality
computers, peripherals, and software to
suit both personal and business
requirements.`,
icon: sales
	},
	{
		header: "Consultancy",
		body: `Our consultancy services provide expert
advice and tailored solutions to help
you navigate challenges, make informed
decisions, and achieve your goals
efficiently. Whether it's business
strategy, technology implementation, or
personalized guidance, we ensure
exceptional results through
comprehensive analysis and actionable
insights.`,
icon: consultancy
	},
	{
		header: "Network Solutions",
		body: `Providing reliable and secure
networking services, including design,
implementation, and management. We
ensure seamless connectivity,
optimized performance, and robust
security for businesses of all sizes. Let
us keep your network running smoothly
and efficiently.`,
icon: solution
	}
	
]

const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[85%] mx-auto">
		{cards.map((card, key) => 
		 (
			<Card className="flex flex-row !py-0" key={key}>
			<div className="">
			  <CardHeader>
				<CardTitle className="text-[30px] py-5"></CardTitle>
				<Image src={card.icon} alt={card.header}></Image>
			  </CardHeader>
			  <CardContent>
				<h4 className="font-semibold pt-6">{card.header}</h4>
				<p className="text-[14px] text-[#364151] py-8">
				 {card.body}
				</p>
			  </CardContent>
			</div>
		  </Card>
		)
		)}
     
      </div>
	  <Image src={wideImg} alt="dope tech image" className="w-full my-[4rem]"></Image>
    </div>
  );
};

export default Cards;
