import React from "react";
import ContactForm from "@/components/Contact";
import SocialLinks from "./SocialLinks";
import Office from "./Office";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/contact-bg.png"}
          width={10000}
          height={10000}
          className="w-full h-[220px] object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>
        <div className="absolute inset-0 font-extrabold text-center text-5xl flex items-center justify-center">
          Contact Us
        </div>
      </div>
      <div className="mt-10 lg:mt-10 lg:grid grid-cols-2">
        <div className="bg-secondary lg:mx-10 mx-2 rounded-md">
          <ContactForm />
        </div>
        <div className="lg:mt-0 mt-5">
          <div className="shadow-xl lg:mx-10 mx-2 border-2">
            <Office />
          </div>
          <div className="shadow-xl mt-5 lg:mx-10 mx-2 border-2">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
