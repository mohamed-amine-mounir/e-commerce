import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div id="cart" className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart Items</h1>
      </div>
      <div id="cartItems" className="space-y-4">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div
          id="checkout"
          className="mt-8 bg-gray-100 rounded-lg p-6 shadow-md"
        >
          <p className="text-xl font-bold text-gray-800 mb-4">
            Subtotal: ${totalAmount}
          </p>
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Continue Shopping
            </button>

            <button className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1>Your Cart is empty</h1>
      )}
    </div>
  );
};
