import React, { useState } from 'react';

const ProductImages = ({ images = [], thumbnail, title }) => {
  const [mainImage, setMainImage] = useState(images[0] || thumbnail);

  return (
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden bg-white p-4">
        <img
          src={mainImage}
          alt={title}
          className="w-full h-[480px] object-contain"
        />
      </div>
      <div className="flex gap-3 scrollbar-hide">
        {images.map((img, i) => (
          <div key={i} onClick={() => setMainImage(img)} className={`p-2 cursor-pointer w-24 h-24 bg-white object-cover rounded-lg border transition-all duration-200 ${mainImage === img ? 'border border-primary' : ' border-transparent hover:border-primary'}`}>
            <img
              src={img}
              alt={`preview-${i}`}
              />
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
