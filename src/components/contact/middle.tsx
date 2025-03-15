"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaPhoneVolume } from "react-icons/fa";
import { FaLinkedin, FaLocationArrow, FaLocationDot, FaLocationPin, FaXTwitter } from "react-icons/fa6";

const Middle = () => {
  const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    form.reset();
  };
  return (
    <div>
      <div className="pb-8 text-center">
        <h1 className="font-semibold text-[30px] mb-8 mx-auto">
          Request Free Consultation{" "}
        </h1>

        <p className="text-[#364151] w-[70%] mx-auto">
          Get expert advice tailored to your needs! Fill in your details, and
          our team will reach out to discuss the best IT solutions for
          you—completely free of charge.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-[50%] mx-auto"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="message" {...field}></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-[#0067FF] text-[12px] px-10 my-10"
          >
            GET STARTED
          </Button>
        </form>
      </Form>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[70%] mx-auto my-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.11453506778!2d7.4379600752851!3d9.053316288607354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b337e1c0117%3A0xd424fdca6be41d8d!2sCrownet%20Plaza!5e0!3m2!1sen!2sng!4v1741088479650!5m2!1sen!2sng"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          className="w-full lg:min-h-[25rem]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div>
          <div className="flex flex-row items-center justify-start gap-4 mx-8 mb-5">
            <div><FaLocationDot color="#0067FF"></FaLocationDot></div>
            <p className="text-[#364151] text-[14px]">A.Y.M Shafa Filling Station, bill Clinton Drive, Abuja.</p>
          </div>

          <div className="flex flex-row items-center justify-start gap-4 mx-8 mb-5">
            <div><FaEnvelope color="#0067FF"></FaEnvelope></div>
            <p className="text-[#364151] text-[14px]">mjaitsolutions@gmail.com​</p>
          </div>

          <div className="flex flex-row items-center justify-start gap-4 mx-8 mb-5">
            <div><FaPhone color="#0067FF"></FaPhone></div>
            <p className="text-[#364151] text-[14px]">+234 (0) 81 6959 0510</p>
          </div>

          <div className="flex flex-row items-center justify-start gap-4 mx-8 mb-5">
            <div><FaInstagram color="#FF543E"></FaInstagram></div>
            <div><FaLinkedin color="#0067FF"></FaLinkedin></div>
            <div><FaXTwitter></FaXTwitter></div>
            <div><FaFacebook color="#0866FF"></FaFacebook></div>

          </div>



        </div>
      </div>

      <div className="w-[80%] mx-auto my-[4rem]">
        <Card className="flex flex-row items-center">
          <div className="">
            <CardContent>
              <div className="flex flex-row items-center justify-between">
                <h4 className="font-semibold text-[20px]">Let’s Build Something Amazing Together!</h4>

                <Button
                  className="bg-[#0067FF] text-[12px] px-10 my-10"
                >
                  Get Started Today
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="font-semibold text-[#364151]">"We’re here to help turn your ideas into successful projects. Get in touch with our team today!</p>
            </CardFooter>
          </div>

        </Card>
      </div >

    </div >
  );
};

export default Middle;
