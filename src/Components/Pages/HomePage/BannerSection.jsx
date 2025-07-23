import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const BannerSection = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        slidesPerView={1}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-[600px] rounded-3xl"
      >
        <SwiperSlide className="relative">
          <div className="img relative sm:pt-[95.39%]">
            <img
              src="./images/banner-images/banner1.jpg"
              alt="banner-images"
              className="w-full h-full inset-0 max-sm:h-[600px] sm:absolute object-cover"
            />
          </div>
          <div className="details absolute top-1/2 left-1/2 -translate-x-1/2 bg-black/40 xs:rounded-lg p-5 md:!p-10 -translate-y-1/2 text-center xs:max-w-md md:max-w-3xl w-full">
            <h3 className="text-white text-2xl sm:text-5xl font-bold">
              Whats New
            </h3>
            <p className="text-white text-base sm:text-xl my-2 md:my-5">
              Just millions of people selling the things they love.
            </p>
            <button className="bg-white px-5 py-2 rounded-md font-semibold hover:bg-white/90 transition-all duration-300 ease-in-out">
              Check it
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img relative sm:pt-[95.39%]">
            <img
              src="./images/banner-images/banner2.jpg"
              alt="banner-images"
              className="w-full h-full inset-0 max-sm:h-[600px] sm:absolute object-cover"
            />
          </div>
          <div className="details absolute top-1/2 left-1/2 -translate-x-1/2 bg-black/40 xs:rounded-lg p-5 md:!p-10 -translate-y-1/2 text-center xs:max-w-md md:max-w-3xl w-full ">
            <h3 className="text-white text-2xl sm:text-5xl font-bold">
              Trendy Clothes
            </h3>
            <p className="text-white text-base sm:text-xl my-2 md:my-5">
              Just millions of people selling the things they love.
            </p>
            <button className="bg-white px-5 py-2 rounded-md font-semibold hover:bg-white/90 transition-all duration-300 ease-in-out">
              Check it
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img relative sm:pt-[95.39%]">
            <img
              src="./images/banner-images/banner3.jpg"
              alt="banner-images"
              className="w-full h-full inset-0 max-sm:h-[600px] sm:absolute object-cover"
            />
          </div>
          <div className="details absolute top-1/2 left-1/2 -translate-x-1/2 bg-black/40 xs:rounded-lg p-5 md:!p-10 -translate-y-1/2 text-center xs:max-w-md md:max-w-3xl w-full">
            <h3 className="text-white text-2xl sm:text-5xl font-bold">
              Branded Clothes
            </h3>
            <p className="text-white text-base sm:text-xl my-2 md:my-5">
              Just millions of people selling the things they love.
            </p>
            <button className="bg-white px-5 py-2 rounded-md font-semibold hover:bg-white/90 transition-all duration-300 ease-in-out">
              Check it
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSection;
