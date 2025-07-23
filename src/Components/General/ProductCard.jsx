import React from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductCard = ({ item, index }) => {
  return (
    <>
      <Link to={`/${item.category}/product/${item.id}`}
        key={index}
        className="bg-white max-xs:flex rounded-xl shadow hover:shadow-lg  transition-all duration-300 overflow-hidden"
      >
        <div className="max-xs:w-1/2 relative pt-[58%] xs:pt-[110%] bg-black/5">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="max-xs:w-1/2 p-4 space-y-2">
          <h2 className="text-sm leading-5 h-10 sm:text-lg sm:leading-6 sm:h-12 font-semibold text-ellipsis truncate line-clamp-2 whitespace-normal">
            {item.title}
          </h2>
          {item.description && (
            <p className="text-sm leading-[22px] h-11 text-ellipsis truncate line-clamp-2 whitespace-normal">
              {item.description}
            </p>
          )}
          <div className="flex justify-between items-center mt-2">
            <span className="text-primary text-base font-bold">
              ₹{item.price}
            </span>
            <span
              className={`text-sm  px-2 py-1 rounded ${
                item.rating >= 4
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              } ${item.rating <= 2 && "bg-red-100 text-red-700"}`}
            >
              {item.rating} ★
            </span>
          </div>
          <div className="flex justify-center items-center sm:!mt-4">
            <button className="w-full flex justify-center items-center gap-2 px-4 py-1 h-8 rounded-lg hover:bg-primary/60 bg-thick-black text-white transition-duration">
              <span className="text-center text-xs xs:text-base">Add to cart</span>
              <BiCart />
            </button>
            {/* <button className="flex items-center gap-2 px-4 py-1 h-8 rounded-lg hover:bg-primary/60 bg-thick-black text-white transition-duration">
              <BiCart />
            </button> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
