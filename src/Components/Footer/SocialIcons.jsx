import React from "react";
import { socialIcons } from "../../data";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <ul className="flex items-center gap-4">
      {socialIcons.map((item) => {
        return (
          <li key={item.id}>
            <Link to={item.path} target="_blank">
              <img src={item.imgSrc} alt={item.id} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
