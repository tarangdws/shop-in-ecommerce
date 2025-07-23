import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";

const UniqueProductCard = ({item}) => {

  return (
    <>
      <div className="p-2 border rounded-md relative cursor-pointer">
        <button className="absolute top-3 right-3 z-10">
          <IoIosHeartEmpty className="text-xl" />
        </button>
        <div className="img relative pt-[100%]">
          <img
            src={item.imgSrc} alt={item.label}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="details">
          <p className="apply text-sm leading-[22px] text-ellipsis h-12 truncate line-clamp-2 whitespace-normal">
            {item.label}
          </p>
          <p className="text-sm font-medium">{item.price} $</p>
        </div>
      </div>
    </>
  );
};

export default UniqueProductCard;
