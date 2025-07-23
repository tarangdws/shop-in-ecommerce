import { Drawer } from "antd";
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";
const CartDrawer = ({ onClose, open }) => {

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-lg  font-semibold">
            Your cart is
            <span className="bg-primary text-white p-1 rounded-lg text-xl">
              Empty
            </span>
          </p>
        </div>
      </Drawer>
    </>
  );
};
export default CartDrawer;
