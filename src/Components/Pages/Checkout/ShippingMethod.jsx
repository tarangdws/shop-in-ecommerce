import React from "react";

const ShippingMethod = ({charge}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
      <div className="space-y-4">
        <label className="flex items-center gap-4">
          <input type="radio" name="shipping" className="accent-black" defaultChecked />
          <span>Standard Shipping (3-5 Days) — Free</span>
        </label>
        <label className="flex items-center gap-4">
          <input type="radio" name="shipping" className="accent-black" />
          <span>Express Shipping (1-2 Days) — ${charge}</span>
        </label>
      </div>
    </div>
  );
};

export default ShippingMethod;
