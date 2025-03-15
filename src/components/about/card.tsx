import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import img from "../../../public/aboutImg.webp";
import Image from "next/image";

const cards = [
  {
    header: "Discovery",
    body: `Understand client needs and goals
through thorough consultation and
analysis.`,
  },
  {
    header: "Design",
    body: `Create tailored solutions and strategies that align with client objectives.`,
  },
  {
    header: "Development",
    body: `Implement robust IT solutions using cutting-edge technologies and best practices.`,
  },
  {
    header: "Deployment",
    body: `Seamlessly integrate solutions into existing systems with minimal disruption.`,
  },
  {
    header: "Testing",
    body: `Conduct rigorous testing to ensure quality, reliability, and security.`,
  },
  {
    header: "Delivery",
    body: `Provide ongoing support, monitoring, and maintenance to optimize performance and ensure client satisfaction.`,
  },
];

const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[85%] mx-auto">
        {cards.map((card, key) => (
          <Card className="flex flex-row !py-0" key={key}>
            <div className="">
              <CardHeader>
                <CardTitle className="text-[30px] py-3"></CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold pt-6">{card.header}</h4>
                <p className="text-[14px] text-[#364151] py-8">{card.body}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      <div className="py-[6rem] text-center">
        <h1 className="font-semibold text-[30px] mb-8 mx-auto">
          Why Choose Us?{" "}
        </h1>

        <p className="text-[#364151] w-[70%] mx-auto">
          We provide top-quality IT solutions, unmatched customer support, and
          cutting-edge technology tailored to your needs. With reliability,
          expertise, and a customer-first approach, we ensure you get the best
          products and services to stay ahead in the digital world.
        </p>
      </div>
      <Image src={img} alt="very fine office"></Image>

      <div className="w-[70%] mx-auto my-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              Expertise and Experience
            </AccordionTrigger>
            <AccordionContent>
              With over a decade in the industry, we bring extensive knowledge
              and a proven track record in delivering successful IT solutions
              tailored to diverse client needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline">
              Customized Solutions
            </AccordionTrigger>
            <AccordionContent>
              We prioritize understanding your unique requirements and business
              goals, crafting bespoke IT strategies and solutions that drive
              efficiency, productivity, and growth.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline">
              Exceptional Customer Support
            </AccordionTrigger>
            <AccordionContent>
              Our dedicated support team ensures prompt assistance and proactive
              maintenance, guaranteeing minimal downtime and maximum operational
              continuity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline">
              Cutting-Edge Technology
            </AccordionTrigger>
            <AccordionContent>
              We stay ahead of the curve with the latest advancements in
              technology, offering state-of-the-art solutions that keep your
              systems secure, agile, and future-proof.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline">
              Transparent
            </AccordionTrigger>
            <AccordionContent>
              We value clear and open communication throughout every project
              phase, keeping you informed and involved to ensure alignment with
              your expectations and objectives.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline">
              Cost-Effective Solutions
            </AccordionTrigger>
            <AccordionContent>
              By optimizing processes and leveraging scalable technologies, we
              deliver cost-effective solutions that maximize your ROI and
              support long-term sustainability.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Cards;
