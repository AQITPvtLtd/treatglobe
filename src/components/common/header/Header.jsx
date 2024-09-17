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
import { IoMdArrowDropdown } from "react-icons/io";
import { menu } from "./menudata";
const Header = () => {
  const { t } = useTranslation();

  const context = useContext(UserContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [openSubIndex, setSubOpenIndex] = useState(-1);

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  const handleSubSubmenu = (index) => {
    if (openSubIndex === index) {
      setSubOpenIndex(-1);
    } else {
      setSubOpenIndex(index);
    }
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
      <div className="bg-white lg:grid flex gap-x-2 grid-cols-6 justify-evenly text-lg text-white">
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
        <div className="lg:flex hidden col-span-3 col-start-3 mx-5  items-center">
          <SearchBar />
        </div>

        {/* Email and Phone No - Hidden on mobile */}
        <div className="lg:mx-0 text-primary mx-14 lg:flex lg:mt-0 mt-2 items-center justify-center hidden ">
          <div>
            <div>
              {/* <Link
                href="tel:+91 98186 47557"
                className="hover:text-secondary "
              >
                <div className="flex gap-3">
                  <FaPhoneAlt className="mt-1" />
                  <p>+91 98186 47557</p>
                </div>
              </Link> */}
              {/* <Link
                href="mailto:info@treatglobe.com"
                className="hover:text-secondary"
              >
                <div className="flex gap-3">
                  <MdEmail className="mt-1" />
                  <p>info@treatglobe.com</p>
                </div>
              </Link> */}
              <div>
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/80 shadow-md text-white py-2 px-3 col-start-3 rounded-md flex justify-end"
                >
                  <div>Get Quote</div>
                </Link>
              </div>
            </div>
            {/* <div className="lg:flex hidden gap-4 items-center mt-2 mb-2">
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
            </div> */}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="w-full bg-primary text-white">
        <div className="flex items-center px-4">
          {/* Full Navbar Menu */}
          <nav
            className={`navbar absolute right-0 z-30 rounded border-[.5px] border-body-color/50  px-6 duration-300 dark:border-body-color/20 lg:visible lg:static w-full lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
              navbarOpen
                ? "visibility top-[10%] opacity-100"
                : "invisible top-[120%] opacity-0"
            } ${sticky && "top-[35%]"}`}
          >
            <ul className="block lg:grid grid-cols-8 items-center gap-2 relative bg-primary">
              {menu.map((menuItem, index) => (
                <li
                  onMouseEnter={() => handleSubmenu(menuItem.id)}
                  onMouseLeave={() => {
                    handleSubmenu(-1);
                    handleSubSubmenu(-1);
                  }}
                  key={index}
                  className={`group relative text-center ${
                    usePathName === menuItem.path
                      ? "bg-secondary"
                      : "text-dark hover:bg-secondary"
                  }`}
                >
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      className={`flex py-2 px-2 lg:mr-0 lg:inline-flex lg:px-0 lg:py-3 `}
                    >
                      <div>{t(menuItem.title)}</div>
                    </Link>
                  ) : (
                    <>
                      <p
                        onClick={() => {
                          handleSubmenu(menuItem.id);
                        }}
                        className="px-2 flex cursor-pointer items-center justify-between py-2 text-dark group-hover:bg-secondary lg:mr-0 lg:inline-flex lg:px-0 lg:py-3"
                      >
                        {t(menuItem.title)}
                        <IoMdArrowDropdown />
                      </p>
                      <div
                        className={`submenu relative left-0 top-full lg:ml-0 pl-4 rounded-sm transition-[top] duration-300 lg:absolute lg:top-[102%] lg:w-[250px] lg:p-4 bg-primary lg:shadow-lg ${
                          openIndex == menuItem.id ? "block" : "hidden"
                        }`}
                      >
                        {menuItem.submenu.map((submenuItem, index) => (
                          <div
                            key={index}
                            className="group text-left relative bg-primary grid"
                          >
                            {submenuItem.path ? (
                              <Link
                                href={submenuItem.path}
                                key={index}
                                className={`block rounded py-2 text-sm text-dark hover:bg-secondary lg:px-3`}
                              >
                                {t(submenuItem.title)}
                              </Link>
                            ) : (
                              <>
                                <p
                                  onMouseEnter={() => {
                                    handleSubSubmenu(submenuItem.id);
                                  }}
                                  onClick={() => {
                                    handleSubSubmenu(submenuItem.id);
                                  }}
                                  className="rounded py-2 text-sm lg:px-3 flex cursor-pointer justify-between text-dark hover:bg-secondary"
                                >
                                  {submenuItem.title}
                                  <span className="pl-3">
                                    <svg
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                </p>
                                <div
                                  className={`lg:ml-[225px] rounded-sm bg-primary lg:px-3 lg:py-2 lg:-mt-6 ml-4 transition-[top] duration-300 lg:absolute lg:w-[250px] lg:shadow-lg ${
                                    openSubIndex === submenuItem.id
                                      ? "block"
                                      : "hidden"
                                  }`}
                                >
                                  {submenuItem.submenu.map(
                                    (subsubmenuItem, index) => (
                                      <Link
                                        href={subsubmenuItem.path}
                                        key={index}
                                        className="bg-primary block rounded py-2.5 text-sm text-dark hover:bg-secondary lg:px-3"
                                      >
                                        {subsubmenuItem.title}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              ))}
              {/* Adding LanguageChanger beside navbar items */}
              <li className="items-center lg:flex hidden">
                <LanguageChanger />
              </li>
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
