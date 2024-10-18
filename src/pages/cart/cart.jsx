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
    <div id="cart" className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Your Cart
          </h1>

          {totalAmount > 0 ? (
            <>
              <div id="cartItems" className="space-y-6">
                {PRODUCTS.map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} key={product.id} />;
                  }
                })}
              </div>

              <div
                id="checkout"
                className="mt-12 bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <p className="text-2xl font-bold text-gray-800 mb-6">
                  Subtotal:{" "}
                  <span className="text-green-600">
                    ${totalAmount.toFixed(2)}
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => navigate("/")}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105"
                  >
                    Continue Shopping
                  </button>
                  <button className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transform hover:scale-105">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-gray-500 mb-8">
                Looks like you haven&rsquo;t added any items to your cart yet.
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
