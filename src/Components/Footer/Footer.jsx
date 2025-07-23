import React from "react";
import Logo from "../Header/Logo";
import SocialIcons from "./SocialIcons";
import { footerLinks } from "../../data";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="pt-5 sm:py-5 border-t border-primary-border">
      <div className="container flex flex-col sm:flex-row gap-4 max-lg:flex-wrap-reverse">
        <div className="contact-column max-sm:order-1 max-lg:w-full lg:flex-1">
          <Logo />
          <p className="my-6">
            Cricklewood,London <br /> NW2 6qg, Uk
          </p>
          <div className="icons">
            <SocialIcons />
          </div>
        </div>
        {footerLinks.map((item, index) => {
          return (
            <ul className="lg:max-w-52 lg:w-full max-lg:flex-1" key={index}>
              <h2 className="footer-head font-semibold mb-3">{item.title}</h2>
              {item.links.map((link) => {
                return (
                  <li
                    className="text-para-color my-3 text-hover"
                    key={link.label}
                  >
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div className="container">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
