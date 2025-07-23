import React from "react";
import Search from "./Search/Search";
import HeaderIcons from "./HeaderIcons";
import Navbar from "./Navbar";
import CartDrawer from "./Cart/CartDrawer";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header className="bg-soft-bg text-xs xs:text-sm">
        <div className="container py-6">
          <div className="flex items-center mb-3">
            <Logo />
            <div className="search-wrapper max-w-3xl w-full hidden lg:block ml-4">
              <Search />
            </div>
            <div className="icon-section ml-4">
                <HeaderIcons />
            </div>
          </div>
          <div className="navigation relative">
            <Navbar />
          </div>
        </div>
        <CartDrawer />
      </header>
    </>
  );
};

export default Header;
