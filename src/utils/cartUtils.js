import { toast } from "react-toastify";

// get items from the cart 
export const getCart = () =>{
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

// save items to the cart
export const saveToCart = (cart) =>{
    localStorage.setItem("cart",JSON.stringify(cart))
}

// add product to the cart
export const addToCart = (product) => {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex >= 0) {
        cart[existingIndex].quantity += 1;
        toast.info(`${product.title} quantity increased`);
    } else {
        cart.push({...product, quantity: 1});
        toast.success(`${product.title} added to cart`);
    }
    console.log(product)

    saveToCart(cart)
    window.dispatchEvent(new Event("cart-updated"));
}

export const cartCount = () =>{
    const cart = getCart().length
    return cart > 0 ? cart : 0;
}

export const removeFromCart = (id) =>{
    const cart = getCart().filter(item => item.id !== id);
    saveToCart(cart);
    window.dispatchEvent(new Event("cart-updated"));
    toast.error("Item removed from cart");
}

export const removeAll = () =>{
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cart-updated"));
    toast.warning("All items removed from cart");
}