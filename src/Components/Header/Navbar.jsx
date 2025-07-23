import React, { useEffect, useState } from "react";
import { MdSegment } from "react-icons/md";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import { CgClose } from "react-icons/cg";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  const [navData, setNavData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchNavData = async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setNavData(data);
    };

    fetchNavData();
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }
  }, [menuOpen]);

  return (
    <>
      {menuOpen && (
        <div
          className={`fixed block lg:hidden w-full h-full bg-black/20 inset-0 z-10 transition-all duration-300 ease-in-out ${
            menuOpen ? "!left-0" : "-left-full"
          }`}
          onClick={handleToggleMenu}
        ></div>
      )}
      <div className="flex gap-3 xs:gap-6 items-center w-full lg:hidden">
        <button
          className="-scale-x-100 bg-white px-4 xs:px-6 py-2 xs:py-3 rounded-full"
          onClick={handleToggleMenu}
        >
          <MdSegment className="text-2xl" />
        </button>
        <div className="w-full">
          <Search navData={navData} />
        </div>
      </div>
      {/* for screen below 1024px */}
      <ul
        className={`fixed z-50 h-full lg:hidden max-lg:top-0 flex flex-col w-3/4 xs:w-2/3 max-lg:bg-white px-5 py-10 shadow transition-all duration-300 ease-in-out ${
          menuOpen ? "!left-0 overflow-auto" : "-left-full"
        }`}
      >
        <button
          className="absolute block top-5 right-5"
          onClick={handleToggleMenu}
        >
          <CgClose className="text-lg" />
        </button>
        {navData.map((item, index) => (
          <li
            key={index}
            onClick={handleToggleMenu}
            className="relative py-3 group cursor-pointer lg:text-center"
          >
            <Link to={`./category/${item.slug}`}>{item.name}</Link>

            {/* 30% width underline on hover */}
            <span className="hidden absolute left-0 bottom-0 w-full h-[3px] bg-primary transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
          </li>
        ))}
      </ul>
      {/* for screen above 1024px */}
      {navData.length > 0 && (
        <div className="hidden lg:block pt-4">
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {navData.map((item, index) => (
              <div
                key={index}
                className="relative group mx-6 text-sm cursor-pointer overflow-y-hidden"
              >
                <Link
                  to={`./category/${item.slug}`}
                  className="text-text-color hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
                {/* Underline on hover */}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </Marquee>
        </div>
      )}
    </>
  );
};

export default Navbar;
