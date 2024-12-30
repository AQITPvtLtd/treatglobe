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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.039939342571!2d77.0523116!3d28.4180517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23ce89cdc9c3%3A0xbd3f62fc7bc06ed5!2sTreatGlobe%20%7C%20Best%20Treatment%20in%20India%20%7C%20Delhi%20%7C%20Near%20IGI%20Airport%20%7C%20Best%20Surgeons%20in%20India%20%7C%20Top%20Hospitals%20in%20India!5e0!3m2!1sen!2sin!4v1735550834536!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full lg:h-96"
              style={{ border: 0 }}
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
