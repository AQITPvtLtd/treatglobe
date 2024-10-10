import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

import Link from "next/link";

const Top = () => {
  return (
    <div className="bg-primary lg:flex justify-evenly p-3 text-lg text-white">
      {/* Social Icons */}
      {/* <div className="flex gap-5 mt-1 lg:mx-0 mx-24">
        <Link
          target="__blank"
          href={"https://www.facebook.com/profile.php?id=61559397785328"}
          className="hover:text-secondary"
        >
          <FaFacebook />
        </Link>
        <Link
          target="__blank"
          href={"https://www.instagram.com/treatglobe/"}
          className="hover:text-secondary"
        >
          <FaInstagram />
        </Link>
        <Link
          target="__blank"
          href={
            "https://www.linkedin.com/company/treat-glob/?viewAsMember=true"
          }
          className="hover:text-secondary"
        >
          <FaLinkedin />
        </Link>
        <Link
          target="__blank"
          href={"https://www.youtube.com/@TreatGlobe"}
          className="hover:text-secondary"
        >
          <FaYoutube />
        </Link>
      </div> */}
      <SearchBar />
      {/* Email and Phone No. */}
      <div className="lg:flex gap-5 lg:mx-0 mx-14 lg:mt-0 mt-2">
        <Link href="tel:+91 98186 47557" className="hover:text-secondary">
          <div className="flex gap-3">
            <FaPhoneAlt className="mt-1" />
            <p>+91 98186 47557</p>
          </div>
        </Link>

        <Link
          href="mailto:treatglobeinfo@gmail.com"
          className="hover:text-secondary"
        >
          <div className="flex gap-3">
            <MdEmail className="mt-1" />
            <p>treatglobeinfo@gmail.com</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Top;
