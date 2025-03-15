import Image from "next/image";
import Link from "next/link";
import illustration from "../../../public/partnerImg.webp";
import sponsor from "../../../public/sponsor1.webp";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const Partner = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-[3rem]">
        <h3 className="text-[#0B0A0A] text-[30px] font-semibold">
          Our Partners
        </h3>
        <p className="text-[#364151]">
          Our Network of Trusted Partners Helps Us Deliver the Best
        </p>
      </div>

      <div className="flex flex-row flex-wrap px-[3rem] gap-8 justify-center">
        <div className="w-[30%]">
          <Image src={sponsor} alt="sponsor" className="w-[100%]"></Image>
        </div>
        <div className="w-[30%]">
          <Image src={sponsor} alt="sponsor" className="w-[100%]"></Image>
        </div>
        <div className="w-[30%]">
          <Image src={sponsor} alt="sponsor" className="w-[100%]"></Image>
        </div>
        <div className="w-[30%]">
          <Image src={sponsor} alt="sponsor" className="w-[100%]"></Image>
        </div>
        <div className="w-[30%]">
          <Image src={sponsor} alt="sponsor" className="w-[100%]"></Image>
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
