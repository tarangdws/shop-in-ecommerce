import React from "react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { supportSellerProduct } from "../../../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SupportSeller = () => {
  return (
    <>
      <div id="support-seller">
        <h3 className="text-lg font-medium">
          Find things you'll love. Support independent sellers.
        </h3>
        <h4 className="text-subtext-color text-sm font-medium ">
          Only on polka.
        </h4>

        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          slidesPerView={2}
          navigation={false}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 8,
              spaceBetween: 24,
            },
          }}
          className="my-12"
        >
          {supportSellerProduct.map((item) => {
            return (
              <SwiperSlide key={item.id} className="text-center">
                <div className="img p-2.5 border rounded-lg shadow-lg">
                  <img
                    src={item.imgSrc}
                    alt={item.textNode}
                    className="w-full"
                  />
                </div>
                <h4 className="pt-6 text-sm font-medium capitalize">
                  {item.textNode}
                </h4>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default SupportSeller;
