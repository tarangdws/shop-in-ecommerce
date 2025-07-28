// File: ProductInfo.jsx
import React from "react";
import { BiCart } from "react-icons/bi";
import { addToCart } from "../../../utils/cartUtils";


const ProductInfo = ({ product }) => {
  const handleAdd = () => {
    addToCart(product)
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
        {product.title}
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-primary pl-4">
        {product.description}
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-4 text-xl">
          <span className="font-bold text-primary">${product.price}</span>
          <del className="text-gray-400">
            ${Math.round(product.price * 1.2)}
          </del>
          <span className="text-green-600 text-sm">
            ({product.discountPercentage}% OFF)
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span
            className={`px-2 py-1 rounded-full ${
              product.rating >= 4
                ? "bg-green-100 text-green-700"
                : product.rating >= 3
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {" "}
            {product.rating} ★
          </span>
          <span className="text-gray-500">({product.stock} in stock)</span>
        </div>
      </div>

      <button onClick={handleAdd} className="mt-6 w-full sm:w-auto px-6 py-3 flex items-center gap-3 bg-black text-white rounded-xl hover:bg-primary transition-all font-semibold text-lg shadow-lg">
        <BiCart className="text-2xl" />
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default ProductInfo;
