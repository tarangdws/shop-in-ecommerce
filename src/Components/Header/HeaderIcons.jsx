import React, { useState } from "react";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import CartDrawer from "./Cart/CartDrawer";

const HeaderIcons = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex gap-3 xs:gap-6 items-center">
        <Link
          to={"/help"}
          className="hidden xs:block font-medium py-2 lg:py-3.5 px-[30px] bg-primary rounded-full text-white"
        >
          <span>Help</span>
        </Link>
        <Link to={"/login"} className="flex items-center gap-2 text-hover">
          <BiUser className="text-2xl" />
          <span className="hidden xs:block">Account</span>
        </Link>
        <button className="flex items-center gap-2 text-hover" onClick={showDrawer}>
          <div className="relative">
            <span className="absolute w-4 h-4 text-xs flex justify-center items-center bg-primary rounded-full text-white -top-2 -right-0.5">
              0
            </span>
            <BiShoppingBag className="text-2xl" />
          </div>
          <span className="hidden xs:block">Shoping</span>
        </button>
      </div>
      <CartDrawer onClose={onClose} open={open} />
    </>
  );
};

export default HeaderIcons;
