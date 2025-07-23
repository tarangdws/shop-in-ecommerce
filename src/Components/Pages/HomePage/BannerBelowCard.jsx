import React from "react";
import { cardData } from "../../../data";

const BannerBelowCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 py-5">
      {cardData.map((item) => {
        return (
          <div className="card flex items-center justify-between w-full bg-gray-bg rounded-lg p-6" key={item.id}>
            <div className="content max-w-52">
              <h4 className="font-semibold text-base">{item.mainNode}</h4>
              <p className="text-xs mt-3">{item.text}</p>
            </div>
            <div className="img">
              <img src={item.imgSrc} alt={item.mainNode} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BannerBelowCard;
