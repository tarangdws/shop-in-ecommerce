import React, { useEffect, useState } from "react";
import BillingDetails from "./BillingDetails";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import Summary from "../Cart/Summary";
import { getCart } from "../../../utils/cartUtils";

const CheckoutPage = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const shippingCharge = 20;

  useEffect(() => {
    setCartProduct(getCart());
  }, []);

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <BillingDetails />
          <ShippingMethod charge={shippingCharge} />
          <PaymentMethod />
        </div>
        <Summary cartProduct={cartProduct} charge={shippingCharge} />
      </div>
    </div>
  );
};

export default CheckoutPage;
