import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";

const CategoryDropdown = ({ navData }) => {
  const [toggleDropdwon, setToggleDropdwon] = useState();
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setToggleDropdwon((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setToggleDropdwon(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className="category-dropdown relative bg-gray-bg rounded-full hidden xs:block"
    >
      <div className="label" onClick={handleToggleDropdown}>
        <button className="flex items-center gap-2 px-6 py-2">
          All Category
          <GoChevronDown />
        </button>
      </div>
      {toggleDropdwon && (
        <div className="dropdown-content absolute bg-white z-20 left-0 top-8 shadow w-72 rounded-md p-2">
          <ul className="h-80 overflow-y-auto">
            {Array.isArray(navData) &&
              navData.map((item, index) => (
                <Link to={item} key={index}>
                  <li className="text-sm p-2 hover:bg-soft-bg my-1 rounded-lg text-hover">
                    {item}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
