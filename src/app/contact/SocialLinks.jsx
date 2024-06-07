"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import Link from "next/link";
const SocialLinks = () => {
  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="text-center mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Connect with Us
      </h3>
      <p>
        Stay informed with the latest news and insights from Treat Globe by
        connecting with us on social media. Join the conversation and engage
        with our community.
      </p>
      <div className="container max-w-screen-lg mx-auto mt-4">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            {/* <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <FaFacebook />
            </button> */}

            <Link
              href="https://www.instagram.com/lex__fori_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              className="bg-pink-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://chat.whatsapp.com/BTGfLwVBqTJ3A1LQcA4iqS"
              className="bg-green-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <IoLogoWhatsapp />
            </Link>
            {/* <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <FaLinkedin />
            </button> */}
            <Link
              href="https://t.me/lex_fori"
              className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <FaTelegramPlane />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
