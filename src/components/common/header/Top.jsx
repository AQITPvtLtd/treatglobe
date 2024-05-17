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
    <div className="bg-primary md:flex justify-evenly p-3 text-xl text-white">
      {/* Social Icons */}
      <div className="flex gap-5">
        <Link href={"#!"}>
          <FaFacebook />
        </Link>
        <Link href={"#!"}>
          <FaInstagram />
        </Link>
        <Link href={"#!"}>
          <FaLinkedin />
        </Link>
        <Link href={"#!"}>
          <FaXTwitter />
        </Link>
      </div>

      {/* Email and Phone No. */}
      <div className="flex gap-5">
        <Link href={"#!"}>
          <div className="flex gap-3">
            <FaPhoneAlt className="mt-1" />
            <p>+91-11-6524397</p>
          </div>
        </Link>

        <Link href={"#!"}>
          <div className="flex gap-3">
            <MdEmail className="mt-1" />
            <p>info@lorempixel.com</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Top;
