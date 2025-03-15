import Image from "next/image";
import Link from "next/link";
import illustration from "../../../public/partnerImg.webp";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import sponsor1 from "../../../public/sponsor1.webp";
import sponsor2 from "../../../public/sponsor2.png";
import sponsor3 from "../../../public/sponsor3.png";
import sponsor4 from "../../../public/sponsor4.png";
import sponsor5 from "../../../public/sponsor5.png";
import { Button } from "../ui/button";

const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];

const Partner = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-12">
        <h3 className="text-[#0067FF] text-[30px] font-semibold">Our Partners</h3>
        <p className="text-[#364151] pl-2 pr-1 ">Our Network Of Partners Helps Us Deliver The Best</p>
        <div className="grid grid-cols-2 sm:flex sm:justify-center gap-8 mt-6">
          {sponsors.map((logo, index) => (
            <div key={index} className="w-[150px] flex-shrink-0">
              <Image
                src={logo}
                alt={`sponsor ${index + 1}`}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[80%] mx-auto my-[5rem]">
        <Card className="flex flex-row items-center !py-0">
          <div className="w-[50%]">
            <CardHeader>
              <CardTitle className="text-[30px] py-5">Let’s <span className="text-[#0067FF]"> Build </span> Something Amazing <span className="text-[#0067FF]"> Together </span></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[14px] text-[#364151] py-5">We’re here to help turn your ideas into successful  projects. Get in touch with our team today</p>
            </CardContent>
            <CardFooter>
              <Link href={'/marketplace'}>
                <Button className="bg-[#0067FF] w-full">Get Started Today</Button>
              </Link>

            </CardFooter>
          </div>
          <div className="w-[50%]">
            <Image src={illustration} alt="an illustration"></Image>
          </div>

        </Card>
      </div >
    </div >
  );
};

export default Partner;
