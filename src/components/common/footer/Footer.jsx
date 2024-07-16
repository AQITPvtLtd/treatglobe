"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <footer className=" items-center text-surface">
        <div className="border text-gray-600 mt-5 mx-5"></div>
        <div className="bg-primary text-white rounded-lg mx-4 lg:mx-[250px] p-5 mt-10">
          <p className="text-center text-lg font-bold">{t("footer:note")}</p>{" "}
          {t("footer:notecontent")}
        </div>
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
                    <Link
                      href="/about/who-are-we"
                      className="hover:text-darkgreen"
                    >
                      {t("navbar:about")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/why-choose-us"
                      className="hover:text-darkgreen"
                    >
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
                    <Link href="/tests/1" className="hover:text-blue">
                      {t("treatments:one")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/tests/2" className="hover:text-blue">
                      {t("treatments:two")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/tests/3" className="hover:text-blue">
                      {t("treatments:four")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/tests/4" className="hover:text-blue">
                      {t("treatments:eight")}
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
                    <Link href="/" className="hover:text-blue">
                      G-36, First Floor, Outer circle, Connaught place, New
                      Delhi - 110001
                    </Link>
                  </li>
                  <li className="mt-3 leading-normal">
                    <Link href="tel:+91-981 172 4700">
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
            href="https://tw-elements.com/"
          >
            TekBooster
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
