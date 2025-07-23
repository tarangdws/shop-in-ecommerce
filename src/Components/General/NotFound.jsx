import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-bg px-4 py-10 text-center">
      {/* Error Code */}
      <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold text-primary drop-shadow-md leading-none">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-color mt-2">
        Page Not Found
      </h2>

      {/* Message */}
      <p className="text-base sm:text-lg text-subtext-color mt-4 max-w-sm sm:max-w-md mx-auto">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* CTA */}
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-3 text-white text-sm sm:text-base bg-primary hover:bg-third rounded-xl shadow transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
