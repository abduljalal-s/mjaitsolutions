import Image from "next/image";
import img from "../../../public/contactImg.webp";

const Top = () => {
  return (
    <div className="py-[6rem] text-center">
      <h1 className="font-semibold text-[30px] mb-8 mx-auto">
        Let’s Connect – We’re Here to Help{" "}
      </h1>

      <p className="text-[#364151] w-[70%] mx-auto">
        Have questions or need assistance? Reach out to us for expert guidance,
        IT solutions, or product inquiries. Our team is ready to provide the
        support you need—let’s start the conversation today!
      </p>

	  <Image src={img} alt="fine office" className="my-[4rem]"></Image>
    </div>
  );
};

export default Top;
