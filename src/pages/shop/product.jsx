import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  //  how use context work ? and what i did here
  const { addToCart, cartItems } = useContext(ShopContext);

  //  to display amount of product in the button

  const cartItemAmount = cartItems[id];
  return (
    <div
      id="product"
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
    >
      <img
        src={productImage}
        alt={productName}
        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-6 flex-grow">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{productName}</h3>
        <p className="text-green-600 font-semibold text-lg mb-4">
          ${price.toFixed(2)}
        </p>
      </div>
      <button
        className="w-full py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
        //  understand that id
        onClick={() => addToCart(id)}
      >
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
