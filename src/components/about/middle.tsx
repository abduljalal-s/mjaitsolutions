import support from "../../../public/support.webp";
import network from "../../../public/network.webp";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Middle = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[85%] mx-auto">
        {/* Card 1 - Our Mission */}
        <Card className="flex flex-col ">
          <CardHeader>
            <Image src={support} alt="mission" />
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-[25px]">Our Mission</h4>
            <p className="text-[14px] text-[#364151] py-4">
              MJA IT SOLUTIONS is a Company that offers General ICT services
              such as sales and servicing of all forms of computers such as
              desktops, laptops, palmtops and software, as well as accessories
              like printers, scanners, and keyboards, and general ICT Office
              Equipment across Abuja and its environs.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 - Our Vision */}
        <Card className="flex flex-col">
          <CardHeader>
            <Image src={support} alt="mission" />
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-[25px]">Our Vision</h4>
            <p className="text-[14px] text-[#364151] py-4">
              To retail computers and related products and also to provide
              professional computer services that will assist businesses and
              individuals in ensuring that their computers are always in good
              shape to help them carry out their business.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 - Our Vision */}
        <Card className="flex flex-col">
          <CardHeader>
            <Image src={support} alt="mission" />
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-[25px]">Our Vision</h4>
            <p className="text-[14px] text-[#364151] py-4">
              To retail computers and related products and also to provide
              professional computer services that will assist businesses and
              individuals in ensuring that their computers are always in good
              shape to help them carry out their business.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="py-[6rem] text-center">
        <h1 className="font-semibold text-[30px] mb-8 mx-auto">
          A Proven 6-Step Approach to IT Excellence{" "}
        </h1>

        <p className="text-[#364151] w-[70%] mx-auto">
          We believe in the power of technology to transform businesses and
          improve lives. Our mission is to provide top-quality IT devices and
          solutions that enhance efficiency, security, and connectivity—helping
          you stay ahead in an ever-evolving digital landscape.
        </p>
      </div>
    </div>
  );
};

export default Middle;
