import { createContext, useState } from "react";
import { PRODUCTS } from "../products";
export const ShopContext = createContext(null);

const getDefaultCart = function () {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    // i = 1 because id start with 1
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = function (props) {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find(
          (prouduct) => prouduct.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  // we want to do with state , adding item to cart
  const addToCart = function (itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  //
  const removeFromCart = function (itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount,
    }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };
  // const contextvALUE = {
  //   addToCart,
  //   addToCart
  //   addToCart,

  // }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
