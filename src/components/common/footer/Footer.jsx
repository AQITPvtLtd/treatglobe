"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <footer className=" items-center text-surface">
        <div className="border text-gray-600 mt-5 mx-5"></div>

        <div className="container py-20 pl-10 pt-6 mt-[50px] lg:mt-[14px]">
          <div className="lg:grid grid-cols-4">
            {/* logo */}
            <div>
              <Link href="/" className="">
                <Image
                  src="/logo/logo4.png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-[250px] mb-4"
                />
              </Link>
              <p className=" leading-normal">{t("footer:content")}</p>
            </div>
            <div className="lg:flex justify-center mt-6">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">Quick Links</h5>

                <ul className="mb-0 list-none leading-loose">
                  <li>
                    <Link href="/" className="hover:text-darkgreen">
                      {t("navbar:home")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-darkgreen">
                      {t("navbar:about")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles" className="hover:text-darkgreen">
                      {t("navbar:articles")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-darkgreen">
                      {t("navbar:contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex justify-center mt-6">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">
                  {t("footer:heading2")}
                </h5>

                <ul className="mb-0 list-none leading-loose">
                  <li>
                    <Link href="/" className="hover:text-blue">
                      {t("treatments:one")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-blue">
                      {t("treatments:two")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-blue">
                      {t("treatments:four")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-blue">
                      {t("treatments:three")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* address */}
            <div className="lg:flex justify-center mt-6 lg:ml-5">
              <div className="mb-6">
                <ul className="mb-0 list-none leading-loose">
                  <li className="leading-normal">
                    <h5 className="mb-2.5 font-bold uppercase">
                      {t("footer:heading3")}
                    </h5>
                    <Link
                      target="__blank"
                      href="https://maps.app.goo.gl/LPTCjhdCZBdtzp8m6"
                      className="hover:text-blue"
                    >
                      H no. 371 Sec 38 Gurgaon
                    </Link>
                  </li>
                  <li className="mt-3 leading-normal">
                    <Link href="tel:+91 98186 47557">
                      <h5 className="mb-2.5 font-bold uppercase">
                        {t("footer:heading4")}
                      </h5>
                      <div className="hover:text-blue">+91 98186 47557</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Copyright section --> */}
        <div className="w-full bg-primary text-white p-4 text-center">
          © 2024 Copyright:
          <Link
            className="text-white font-semibold"
            href="https://www.tekbooster.com"
          >
            TekBooster
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
