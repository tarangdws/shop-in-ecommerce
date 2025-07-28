import React, { useState } from "react";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Submitted:", paymentDetails, "Method:", paymentMethod);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">Payment</h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
        {/* Payment Method Selection */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Select Payment Method</h2>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => handlePaymentMethodChange("credit_card")}
              className={`px-4 py-2 rounded-md border ${
                paymentMethod === "credit_card"
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              Credit / Debit Card
            </button>
            <button
              type="button"
              onClick={() => handlePaymentMethodChange("cod")}
              className={`px-4 py-2 rounded-md border ${
                paymentMethod === "cod"
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              Cash on Delivery
            </button>
          </div>
        </div>
        {paymentMethod === "credit_card" && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              maxLength={16}
              className="input-style"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="expiry"
                value={paymentDetails.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="input-style"
                required
              />
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleChange}
                placeholder="CVV"
                maxLength={4}
                className="input-style"
                required
              />
            </div>
            <input
              type="text"
              name="nameOnCard"
              value={paymentDetails.nameOnCard}
              onChange={handleChange}
              placeholder="Name on Card"
              className="input-style"
              required
            />
            <button
              type="submit"
              className="w-full bg-black hover:bg-primary transition text-white py-3 rounded-lg font-medium"
            >
              Pay Now
            </button>
          </form>
        )}

        {/* Cash on Delivery Info */}
        {paymentMethod === "cod" && (
          <div className="text-center py-4">
            <p className="text-sm text-gray-600 mb-4">
              You have selected <strong>Cash on Delivery</strong>. You can
              complete payment at the time of delivery.
            </p>
            <button
              onClick={handleSubmit}
              className="w-full bg-black hover:bg-primary transition text-white py-3 rounded-lg font-medium"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
