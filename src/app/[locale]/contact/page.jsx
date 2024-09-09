import React from "react";
import ContactForm from "@/components/Contact";
import SocialLinks from "./SocialLinks";
import Office from "./Office";
const page = () => {
  return (
    <div className="mt-10 lg:mt-10">
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
