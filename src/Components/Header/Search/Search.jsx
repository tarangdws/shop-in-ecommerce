import React from "react";
// import CategoryDropdown from "./CategoryDropdown";
import { BiSearch } from "react-icons/bi";


const Search = ({navData}) => {

  return (
    <>
      <div className="flex items-center bg-white p-1 xs:p-2 rounded-full text-xs">
        {/* <CategoryDropdown navData={navData} /> */}
        <div className="ml-2 p-1 flex items-center flex-1">
          <input type="text" className="text-sm w-full outline-0 text-subtext-color" placeholder="Search Anything" />
          <button>
            <BiSearch className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
