import React from "react";
import ContactForm from "@/components/Contact";
import SocialLinks from "./SocialLinks";
import Office from "./Office";
const page = () => {
  return (
    <div className="mt-[210px] lg:mt-[170px]">
      {/* <h1 className="text-center text-5xl mb-7 font-serif font-bold">
        Contact Us
      </h1> */}
      <div className="bg-secondary lg:mx-20">
        <ContactForm />
      </div>
      <div className="lg:grid grid-cols-2">
        <div className="shadow-xl mx-10 mt-5 border-2">
          <SocialLinks />
        </div>
        <div className="shadow-xl mx-10 mt-5 border-2">
          <Office />
        </div>
      </div>
    </div>
  );
};

export default page;
