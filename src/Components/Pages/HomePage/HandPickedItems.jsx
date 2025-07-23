import React, { useEffect, useState } from "react";
import ProductCard from "../../General/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation";

const HandPickedItems = () => {
  const [handPickedProduct, setHandPickedProduct] = useState([]);

const fetchHandPickedProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const products = data.products;
      const shuffled = products.sort(() => 0.5 - Math.random());
      setHandPickedProduct(shuffled.slice(0, 6));
    } catch (error) {
      console.error("Error fetching hand-picked products:", error);
    }
  };

  useEffect(() => {
    fetchHandPickedProducts();
  }, []);
  return (
    <>
    <div className="hidden xs:block">
      <h3 className="text-lg font-medium">Discover unique hand-picked items</h3>

      <div className="my-6 hand-picked-product-slider">
        <Swiper
          modules={[A11y]}
          spaceBetween={10}
          slidesPerView={2}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {handPickedProduct.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default HandPickedItems;
