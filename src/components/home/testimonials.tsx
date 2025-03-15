import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import newFace from "../../../public/T2.png";
import face from "../../../public/TFace.webp";
import ticks from "../../../public/threeTick.webp";

const testimonialsData = [
  {
    image: newFace,
    text: "From consultation to delivery, the entire process was seamless. The team was knowledgeable, friendly, and ensured I got exactly what I needed. I’ll definitely be coming back!",
    name: "Emma James, CEO",
  },
  {
    image: face,
    text: "The service was exceptional and the product quality exceeded my expectations. I highly recommend this company to anyone looking for top-notch tech solutions.",
    name: "Jane D, Tech Enthusiast",
  },
];

const Testimonials = () => {
  return (
    <div className="py-[4rem]">
      <div className="flex flex-row justify-center items-center mb-[4rem]">
        <Image
          src={ticks}
          alt={"fancy ticks"}
          className="w-10 relative -top-3"
        ></Image>
        <h2 className="font-semibold text-[30px] text-[#0B0A0A] ">
          TESTIMONIALS
        </h2>
      </div>

      <div className="flex flex-row flex-wrap justify-around">
        {testimonialsData.map((testimonial, key) => {
          return (
            <Card className={`w-[45%] relative my-9  mb-1.5${key % 2 === 0 ? "translate-y-[-4.5rem]" : ""}`} key={key}>
              <Image
                src={testimonial.image}
                alt="avatar"
                className="absolute top-[-20%] left-[50%] translate-x-[-50%]"
              ></Image>

              <CardContent className="mt-[3rem]">
                <p className="text-[#364151] text-[14px]">
                  {testimonial.text}
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-[#0067FF] text-[15px]">
                  {testimonial.name}
                </p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;