import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Top = () => {
  return (
    <div className="bg-primary md:flex justify-evenly p-3 text-lg text-white">
      {/* Social Icons */}
      <div className="flex gap-5 mt-1">
        <Link href={"#!"} className="hover:text-secondary">
          <FaFacebook />
        </Link>
        <Link href={"#!"} className="hover:text-secondary">
          <FaInstagram />
        </Link>
        <Link href={"#!"} className="hover:text-secondary">
          <FaLinkedin />
        </Link>
        <Link href={"#!"} className="hover:text-secondary">
          <FaXTwitter />
        </Link>
      </div>

      {/* Email and Phone No. */}
      <div className="flex gap-5">
        <Link href="tel:+91 98186 47557" className="hover:text-secondary">
          <div className="flex gap-3">
            <FaPhoneAlt className="mt-1" />
            <p>+91 98186 47557</p>
          </div>
        </Link>

        <Link href={"#!"} className="hover:text-secondary">
          <div className="flex gap-3">
            <MdEmail className="mt-1" />
            <p>info@treatglobe.com</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Top;
