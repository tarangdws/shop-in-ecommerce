import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { PiSealCheckFill } from "react-icons/pi";
import { RiShirtFill } from "react-icons/ri";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { toast, ToastContainer, Zoom } from "react-toastify";

const Coupan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    isOpen
      ? document.addEventListener("mousedown", handleClickOutside)
      : document.removeEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const notify = () => {
    navigator.clipboard.writeText("MAFFAT100");
    toast("Text Copied!");
  };

  return (
    <>
      <div className="coupan-wrapper fixed z-20 right-0 top-1/2 -translate-y-1/2">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="coupan-sidebar-tab py-3 px-2  text-3xl bg-primary text-white cursor-pointer"
        >
          <AiFillCaretLeft />
          <p className=" [writing-mode:vertical-lr] font-semibold  rotate-180 uppercase">
            Upto ₹200 off
          </p>
        </div>
      </div>
      <div
        ref={boxRef}
        className={`z-20 fixed right-0 top-1/2 -translate-y-1/2 coupan-sidebar-content bg-gradient-to-bl from-orange-100 to-soft-bg w-[500px] h-[280px] shadow-xl rounded-l-xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute text-base right-1 top-3 bg-primary hover:bg-primary/80 text-white stroke-2 p-1 rounded-full"
          onClick={() => setIsOpen(false)}
        >
          <CgClose />
        </button>
        <div className="p-6 h-full flex flex-col justify-center">
          <div className="flex justify-between">
            {/* Text Content */}
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium mb-1">
                Avail Upto
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">200 OFF</h2>
              <p className="text-sm font-semibold">
                Coupon Code:
                <span
                  className="font-bold text-gray-800 uppercase"
                  onClick={notify}
                >
                  Maffat100
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Applicable on your first order
              </p>

              <Link
                to={"/register"}
                className="block text-center mt-4 bg-primary hover:bg-primary/80 transition-duration text-white px-5 py-2 rounded text-sm font-bold"
              >
                SIGN UP NOW
              </Link>
            </div>

            {/* Image */}
            <div className="w-1/2">
              <img
                src="/images/product/Flat200.jpg"
                alt="₹200 OFF"
                className="w-full"
              />
            </div>
          </div>

          {/* Feature Row */}
          <div className="flex justify-between items-center border-t pt-4 mt-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <PiSealCheckFill className="text-primary" />
              <span>Genuine Products</span>
            </div>
            <div className="flex items-center gap-2">
              <RiShirtFill className="text-primary" />
              <span>Try & Buy</span>
            </div>
            <div className="flex items-center gap-2">
              <FaExchangeAlt className="text-primary" />
              <span>Easy Exchanges & Returns</span>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-5 right-5 z-10">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
      </div>
    </>
  );
};

export default Coupan;
