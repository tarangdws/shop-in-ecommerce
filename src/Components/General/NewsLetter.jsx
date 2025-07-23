import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const NewsLetter = () => {
  return (
    <div className="w-full bg-soft-bg py-10 px-5 rounded-lg">
      <div className="max-w-xl w-full mx-auto text-center font-medium text-sm md:text-lg">
        <span>Yes!</span>
        <p>
          Send me exclusive offers, unique gift ideas, and personalized tips for
          shopping and selling on Commerce.
        </p>
      </div>
      <div className="inputbox flex items-center relative max-w-2xl w-full mx-auto my-5">
        <input type="text" className="w-full border border-primary py-2 md:py-4 px-6 rounded-full text-sm md:text-base" placeholder="Drop Your Email" />
        <button className="flex items-center gap-2 absolute right-1 md:right-2.5 top-1/2 -translate-y-1/2 bg-primary text-white p-2 md:px-6 md:py-2 rounded-full hover:bg-soft-bg border border-transparent hover:text-primary hover:border-primary transition-duration">
          <span className="hidden md:block">Subscribe</span> <MdOutlineArrowRightAlt />
        </button>
      </div>
      <div>
        <p className="underline underline-offset-2 text-xs font-medium text-center">First order only. You’re ready?</p>
      </div>
    </div>
  );
};

export default NewsLetter;
