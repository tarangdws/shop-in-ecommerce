import React, { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../../../utils/cartUtils";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Summary from "./Summary";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const shippingCharge = 20;
  useEffect(() => {
    setCartProduct(getCart());
  }, []);

const handleRemove = (e, id) => {
  e.stopPropagation();
  e.preventDefault();
  removeFromCart(id);
  setCartProduct(getCart());
};


  if (cartProduct.length === 0) {
    return (
      <div className="container !py-24 text-center">
        <h1 className="text-3xl font-bold mb-2">Your Cart is Empty</h1>
        <p className="text-gray-500">
          Looks like you haven’t added anything yet.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold mb-8">Your Shopping Cart </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartProduct.map((item, index) => (
            <Link to={`/${item.category}/product/${item.id}`} key={index}>
              <div
                className="flex items-center justify-between bg-white rounded-xl xs:p-4 xs:border transition my-3"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                  <div>
                    <h3 className="text-sm leading-5 h-10 xs:text-lg mb-2 font-semibold xs:leading-6 xs:h-12 text-ellipsis truncate line-clamp-2 whitespace-normal">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-right flex flex-col gap-1 xs:gap-2">
                  <p className="sm:text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={(e) => handleRemove(e, item.id)}
                    className="text-red-500 text-sm flex items-center gap-1 hover:underline"
                  >
                    <FaTrash className="text-sm" /> Remove
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Order Summary */}
        <Summary cartProduct={cartProduct} charge={shippingCharge} />
      </div>
    </div>
  );
};

export default Cart;
