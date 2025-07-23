import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Coupan from "../General/Coupan/Coupan";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="hidden lg:block">
        <Coupan />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
