import React from "react";

const PaymentMethod = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
      <div className="space-y-4">
        <label className="flex items-center gap-4">
          <input type="radio" name="payment" className="accent-black" defaultChecked />
          <span>Cash on Delivery</span>
        </label>
        <label className="flex items-center gap-4">
          <input type="radio" name="payment" className="accent-black" />
          <span>Credit/Debit Card</span>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
