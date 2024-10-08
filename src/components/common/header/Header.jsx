"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import UserContext from "@/context/UserContext";
import LanguageChanger from "@/components/LanguageChanger";
import { useTranslation } from "react-i18next";
import SearchBar from "../SearchBar";
import { IoMdArrowDropdown } from "react-icons/io";
import { menu } from "./menudata";

const Header = () => {
  const { t } = useTranslation();
  const context = useContext(UserContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1); // For the main menu

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

  const handleCloseNavbar = () => {
    setNavbarOpen(false);
  };

  const toggleSubMenu = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index)); // Toggle submenu
  };

  return (
    <div
      className={`overflow-x-clip header left-0 z-40 top-0 w-full items-center backdrop-sm bg-white font-semibold `}
    >
      <div className="bg-white grid gap-x-5 lg:grid-cols-6 grid-cols-2 justify-evenly text-lg text-white">
        <div className="lg:w-[480px] lg:mx-10">
          <Link
            href="/"
            className={`header-logo block w-full ${
              sticky ? "py-2 lg:py-2" : "py-1"
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

        <div className="lg:flex hidden col-span-3 col-start-3 mx-5 items-center">
          <SearchBar />
        </div>

        <div className="lg:mx-0 text-primary mx-14 lg:flex lg:mt-0 mt-2 items-center justify-center hidden">
          <div>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/80 shadow-md text-white py-2 px-3 col-start-3 rounded-md flex justify-end"
            >
              <div>Get Free Quote</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white lg:hidden flex justify-between pt-1 text-lg text-white">
        <div className="lg:hidden flex items-center mx-2 mb-2">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/80 shadow-md text-white py-1 text-sm px-3 col-start-3 rounded-md flex justify-end"
          >
            <div>Get Free Quote</div>
          </Link>
        </div>
        <div className="">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Mobile Menu"
            className={`flex justify-end right-4 rounded-lg px-3 lg:hidden`}
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
        </div>

        <div className="lg:flex hidden col-span-3 col-start-3 mx-5 items-center">
          <SearchBar />
        </div>

        <div className="lg:mx-0 text-primary mx-14 lg:flex lg:mt-0 mt-2 items-center justify-center hidden">
          <div>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/80 shadow-md text-white py-2 px-3 col-start-3 rounded-md flex justify-end"
            >
              <div>Get Quote</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full bg-primary col-span-3 col-start-3 items-center">
        <SearchBar />
      </div>

      <header className="w-full bg-primary text-white">
        <div className="flex items-center justify-between px-4">
          <nav
            className={`navbar absolute right-0 z-30 rounded px-6 duration-300 dark:border-body-color/20 lg:visible lg:static w-full lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
              navbarOpen
                ? "visibility top-[20%] opacity-100"
                : "invisible top-[120%] opacity-0"
            }`}
          >
            <ul className="block lg:grid grid-cols-8 items-center gap-2 relative bg-primary">
              {menu.map((menuItem, index) => (
                <li
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
                      onClick={handleCloseNavbar}
                      className="flex py-2 px-2 lg:mr-0 lg:inline-flex lg:px-0 lg:py-3"
                    >
                      <div>{t(menuItem.title)}</div>
                    </Link>
                  ) : (
                    <>
                      <p
                        className="px-2 flex cursor-pointer items-center justify-between py-2 text-dark group-hover:bg-secondary lg:mr-0 lg:inline-flex lg:px-0 lg:py-3"
                        onClick={() => toggleSubMenu(menuItem.id)}
                      >
                        {t(menuItem.title)}
                        <IoMdArrowDropdown />
                      </p>
                      <div
                        className={`h-[440px] submenu relative left-0 top-full lg:ml-0 pl-4 rounded-sm transition-[top] duration-300 lg:absolute lg:top-[102%] lg:w-[250px] lg:p-4 bg-primary lg:shadow-lg ${
                          openIndex === menuItem.id ? "block" : "hidden"
                        }`}
                      >
                        {menuItem.submenu.map((submenuItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="group text-left relative bg-primary"
                          >
                            {submenuItem.path ? (
                              <Link
                                href={submenuItem.path}
                                onClick={handleCloseNavbar}
                                className="block rounded py-2 text-sm text-dark hover:bg-secondary lg:px-3"
                              >
                                {t(submenuItem.title)}
                              </Link>
                            ) : (
                              <>
                                <p
                                  className="rounded py-2 text-sm lg:px-3 flex cursor-pointer justify-between text-dark hover:bg-secondary"
                                  onClick={() => toggleSubMenu(submenuItem.id)}
                                >
                                  {submenuItem.title}
                                  <span className="pl-3">
                                    <IoMdArrowDropdown />
                                  </span>
                                </p>
                                <div
                                  className={`relative grid pl-4 lg:absolute top-full left-full w-[150px] bg-primary lg:p-4 ${
                                    openIndex === submenuItem.id
                                      ? "block"
                                      : "hidden"
                                  }`}
                                >
                                  {submenuItem.submenu.map(
                                    (subSubmenuItem, subSubIndex) => (
                                      <Link
                                        href={subSubmenuItem.path}
                                        onClick={handleCloseNavbar}
                                        key={subSubIndex}
                                        className="block rounded py-2 text-sm text-dark hover:bg-secondary lg:px-3"
                                      >
                                        {t(subSubmenuItem.title)}
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
            </ul>
          </nav>

          <div className="lg:flex hidden items-center">
            <LanguageChanger />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
