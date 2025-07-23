import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to={"/"} className="logo mr-auto">
        <h1 className="text-primary text-xl font-semibold">Shop.in</h1>
      </Link>
    </>
  );
};

export default Logo;
