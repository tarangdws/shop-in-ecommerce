import { Drawer } from "antd";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { getCart, removeFromCart } from "../../../utils/cartUtils";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartDrawer = ({ onClose, open }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setCartItems(getCart());
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const handleRemoveItem = (id) => {
    removeFromCart(id);
    setCartItems(getCart());
  };

  return (
    <>
      <Drawer
        title="Cart Items"
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={open}
        className="relative"
      >
        <button className="absolute top-3 right-3" onClick={onClose}>
          <CgClose className="text-xl" />
        </button>
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center bg-white rounded-lg shadow-sm"
              >
                <div className="img max-w-28 w-full">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="max-w-48 w-full">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <span className="text-gray-500">Qty: {item.quantity}</span>
                </div>
                <button
                  className="absolute top-2 right-0"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <AiOutlineDelete className="text-xl hover:scale-90 transition-duration" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}

        {cartItems.length > 0 && (
          <div className="bg-white flex flex-col items-center justify-center gap-5 absolute w-full pb-10 bottom-0 text-base left-1/2 -translate-x-1/2  py-2">
            <div className="mt-4">
              <h3 className="text-lg font-semibold">
                Total: $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </h3>
            </div>
            <div className=" flex justify-center items-center gap-2 ">
              <Link to={"/checkout"} onClick={onClose}>
                <button className="font-semibold bg-thick-black p-2 rounded-lg text-white hover:bg-black/70 transition-duration">
                  Checkout
                </button>
              </Link>
              <span>Or</span>
              <Link to={"/cart"} onClick={onClose}>
                <button className="font-semibold bg-thick-black p-2 rounded-lg text-white hover:bg-black/70 transition-duration">
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
};
export default CartDrawer;
