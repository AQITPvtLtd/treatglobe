"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import UserContext from "@/context/UserContext";
import LanguageChanger from "@/components/LanguageChanger";
import { useTranslation } from "react-i18next";
import SearchBar from "../SearchBar";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const { t } = useTranslation();

  const menuData = [
    {
      id: 1,
      title: () => t("navbar:home"),
      newTab: true,
      path: "/",
    },
    {
      id: 2,
      title: () => t("navbar:about"),
      newTab: true,
      path: "/about",
    },
    { id: 4, title: () => t("navbar:doctors"), newTab: true, path: "/doctors" },
    {
      id: 5,
      title: () => t("navbar:hospitals"),
      newTab: false,
      path: "/hospitals",
    },
    {
      id: 6,
      title: () => t("navbar:articles"),
      newTab: false,
      path: "/articles",
    },
    {
      id: 7,
      title: () => t("navbar:contact"),
      newTab: false,
      path: "/contact",
    },
  ];

  const context = useContext(UserContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [openSubIndex, setSubOpenIndex] = useState(-1);

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const usePathName = usePathname();

  return (
    <div
      className={`overflow-x-clip header left-0 z-40 top-0 w-full items-center backdrop-sm bg-white font-semibold ${
        sticky
          ? "fixed z-[999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : " bg-transparent"
      }`}
    >
      <div className="bg-white lg:grid flex gap-x-2 grid-cols-4 justify-evenly text-lg text-white">
        {/* Logo */}
        <div className="lg:w-[480px] lg:mx-10">
          <Link
            href="/"
            className={`header-logo block w-full ${
              sticky ? "py-5 lg:py-2" : "py-2"
            }`}
          >
            <Image
              src="/logo/logo_new.png"
              alt="logo"
              width={300}
              height={300}
              className="ml-4 left-0"
            />
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <LanguageChanger />
        </div>
        {/* Hamburger Menu - Visible on mobile */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-label="Mobile Menu"
          className="flex justify-end right-4 items-center rounded-lg px-3 py-[6px] lg:hidden"
        >
          <div>
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                navbarOpen ? " top-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                navbarOpen ? " top-[-8px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
        {/* Social Icons - Hidden on mobile */}
        <div className="lg:flex hidden gap-4 items-center justify-center">
          <Link
            target="__blank"
            href={"https://www.facebook.com/profile.php?id=61559397785328"}
            className="hover:text-secondary text-primary"
          >
            <FaFacebook />
          </Link>
          <Link
            target="__blank"
            href={"https://www.instagram.com/treatglobe/"}
            className="hover:text-secondary text-primary"
          >
            <FaInstagram />
          </Link>
          <Link
            target="__blank"
            href={
              "https://www.linkedin.com/company/treat-glob/?viewAsMember=true"
            }
            className="hover:text-secondary text-primary"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="__blank"
            href={"https://www.youtube.com/@TreatGlobe"}
            className="hover:text-secondary text-primary"
          >
            <FaYoutube />
          </Link>
          <Link
            target="__blank"
            href={"https://t.me/treatglobe"}
            className="hover:text-secondary text-primary"
          >
            <FaTelegramPlane />
          </Link>
        </div>
        {/* Email and Phone No - Hidden on mobile */}
        <div className="lg:mx-0 text-primary mx-14 lg:mt-0 mt-2 lg:flex items-center hidden ">
          <div>
            <Link href="tel:+91 98186 47557" className="hover:text-secondary ">
              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1" />
                <p>+91 98186 47557</p>
              </div>
            </Link>

            <Link
              href="mailto:info@treatglobe.com"
              className="hover:text-secondary"
            >
              <div className="flex gap-3">
                <MdEmail className="mt-1" />
                <p>info@treatglobe.com</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:block hidden">
          <SearchBar />
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="w-full bg-primary text-white">
        <div className="flex items-center px-4">
          {/* Full Navbar Menu */}
          <nav
            className={`navbar absolute right-0 z-30 rounded border-[.5px] border-body-color/50 bg-white px-6 duration-300 dark:border-body-color/20 lg:visible lg:static w-full lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
              navbarOpen
                ? "visibility top-[10%] opacity-100"
                : "invisible top-[120%] opacity-0"
            } ${sticky && "top-[35%]"}`}
          >
            <ul className="block lg:grid grid-cols-8 mx-10 items-center lg:text-white text-primary">
              {menuData.map((menuItem, index) => (
                <li key={index} className="group relative flex justify-center">
                  {menuItem.path ? (
                    <Link
                      onClick={() => {
                        setOpenIndex(menuItem.id);
                        setSubOpenIndex(menuItem.submenu?.id || -1);
                      }}
                      href={
                        context?.user && menuItem.id === 10
                          ? "/admin/edit"
                          : menuItem.path
                      }
                      className={`flex py-2 text-lg lg:inline-flex lg:px-0 ${
                        usePathName === menuItem.path
                          ? "text-secondary"
                          : "text-dark hover:text-secondary"
                      } ${
                        menuItem.id === 10 &&
                        "lg:text-secondary lg:font-bold lg:ml-20 lg:py-0 lg:px-4"
                      }`}
                    >
                      {context?.user && menuItem.id === 10
                        ? "Edit"
                        : menuItem.title()}
                    </Link>
                  ) : (
                    <>
                      <p
                        onClick={() => setOpenIndex(menuItem.id)}
                        className="flex cursor-pointer items-center justify-between py-2 text-lg text-dark group-hover:text-secondary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                      >
                        {menuItem.title()}
                        <span>
                          <svg width="25" height="24" viewBox="0 0 25 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12.7071 15.2569C12.3166 15.6474 11.6834 15.6474 11.2929 15.2569L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                    </>
                  )}
                </li>
              ))}
              <div className="lg:block hidden">
                <LanguageChanger />
              </div>
            </ul>
          </nav>
        </div>
        <div className="lg:hidden">
          <SearchBar />
        </div>
      </header>
    </div>
  );
};

export default Header;
