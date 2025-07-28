import React, { useState } from "react";

const BillingDetails = () => {
  const [billData, setBillData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    city: "",
    pincode: "",
    country: "",
  });

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setBillData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Details Submitted", billData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            name="name"
            value={billData.name}
            onChange={handleChangeData}
            placeholder="Full Name"
            className="input-style flex-1 min-w-[250px]"
          />
          <input
            type="email"
            name="email"
            value={billData.email}
            onChange={handleChangeData}
            placeholder="Email Address"
            className="input-style flex-1 min-w-[250px]"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <input
            type="tel"
            name="number"
            inputMode="numeric"
            pattern="\d{10}"
            maxLength={10}
            value={billData.number}
            onChange={handleChangeData}
            placeholder="Phone Number"
            className="input-style flex-1 min-w-[250px]"
          />
          <input
            type="text"
            name="address"
            value={billData.address}
            onChange={handleChangeData}
            placeholder="Street Address"
            className="input-style flex-[2] min-w-[250px]"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            name="city"
            value={billData.city}
            onChange={handleChangeData}
            placeholder="City"
            className="input-style flex-1 min-w-[250px]"
          />
          <input
            type="text"
            name="pincode"
            inputMode="numeric"
            pattern="\d{6}"
            maxLength={6}
            value={billData.pincode}
            onChange={handleChangeData}
            placeholder="Postal Code"
            className="input-style flex-1 min-w-[250px]"
          />
        </div>

        <input
          type="text"
          name="country"
          value={billData.country}
          onChange={handleChangeData}
          placeholder="Country"
          className="input-style w-full"
        />

        <button type="submit" className="bg-primary hover:bg-black text-white py-2 rounded-md">
          Save Data
        </button>
      </form>
    </div>
  );
};

export default BillingDetails;
