import React from "react";
import ContactForm from "@/components/Contact";
import SocialLinks from "./SocialLinks";
import Office from "./Office";
const page = () => {
  return (
    <div className="mt-[210px] lg:mt-[170px]">
      <h1 className="text-center text-5xl mb-7 font-serif font-bold">
        Contact Us
      </h1>
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
      {/* google map */}
      <div className=" overflow-x-clip mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5055642989846!2d77.16402012314279!3d28.64457727975661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02ebaaa6d219%3A0x4f5d77e546cf1493!2sSouth%20Patel%20Nagar%2C%20Block%208%2C%20Patel%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110008!5e0!3m2!1sen!2sin!4v1711389021402!5m2!1sen!2sin"
          width="1800"
          height="350"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
