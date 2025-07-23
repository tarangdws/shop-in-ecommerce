import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Copyright = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="copyright-wrapper flex flex-col md:flex-row gap-3 md:gap-0 items-center sm:justify-between">
      <div>
        <p>©1999 Commerce, Inc.</p>
      </div>
      <ul className="flex items-center gap-6 md:gap-12">
        <li className="text-hover">
          <Link to={"/privacy-policy"}>
            <span>Privacy Policy</span>
          </Link>
        </li>
        <li className="text-hover">
          <Link to={"/terms-of-use"}>
            <span>Terms Of Use</span>
          </Link>
        </li>
        <li className="text-hover">
          <Link to={"/cookies"}>
            <span>Cookies</span>
          </Link>
        </li>
      </ul>
      <div className="scroll-top">
        <button
          className="flex items-center gap-1 text-hover"
          onClick={handleScroll}
        >
          <span>Scroll to top</span>
          <IoIosArrowRoundUp className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Copyright;
