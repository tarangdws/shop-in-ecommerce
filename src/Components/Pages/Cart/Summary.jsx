import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Summary = ({ cartProduct, charge}) => {

  const location = useLocation();
  const page = location.pathname.slice(1)

  const getTotal = () => {
    return cartProduct.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md max-h-max">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${charge}</span>
        </div>
        <div className="flex justify-between font-semibold text-base text-black border-t pt-2">
          <span>Total</span>
          <span>${(charge + getTotal()).toFixed(2)}</span>
        </div>
      </div>
      {
        page === "checkout" ? (
          <Link to="/payment">
            <button className="w-full capitalize mt-6 bg-primary hover:bg-black transition-duration text-white py-3 rounded-lg font-medium">
              Proceed to payment
            </button>
          </Link>
        ) : (
          <Link to="/checkout">
            <button className="w-full mt-6 bg-primary hover:bg-black transition-duration text-white py-3 rounded-lg font-medium">
              Proceed to Checkout
            </button>
          </Link>
        )
      }
    </div>
  );
};

export default Summary;
