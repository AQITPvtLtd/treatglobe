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

      <div className="lg:grid grid-cols-1 mt-10">
        <div className="lg:mx-10 mx-2 rounded-md">
          <div className="w-full h-0 lg:pb-96 pb-16 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.589475045972!2d77.2166586!3d28.6328379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd91628a5411%3A0x978e36fd6c3d6a37!2sTreatglobe!5e0!3m2!1sen!2sin!4v1730694521683!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full lg:h-96"
              style={{ border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
