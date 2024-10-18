import { useState } from "react";

function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {selectedProduct && (
          <div className="md:w-1/2 lg:w-1/2 md:pl-8 mt-8 md:mt-0">
            <img
              src={selectedProduct.imgDetail1}
              alt={selectedProduct.productName}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="flex mt-4 space-x-4">
              <img
                src={selectedProduct.imgDetail1}
                alt="Detail 1"
                className="w-20 h-20 rounded-md cursor-pointer"
                onClick={() =>
                  setSelectedProduct({
                    ...selectedProduct,
                    imgDetail1: selectedProduct.imgDetail1,
                  })
                }
              />
              <img
                src={selectedProduct.imgDetail2}
                alt="Detail 2"
                className="w-20 h-20 rounded-md cursor-pointer"
                onClick={() =>
                  setSelectedProduct({
                    ...selectedProduct,
                    imgDetail1: selectedProduct.imgDetail2,
                  })
                }
              />
              {selectedProduct.imgDetail3 && (
                <img
                  src={selectedProduct.imgDetail3}
                  alt="Detail 3"
                  className="w-20 h-20 rounded-md cursor-pointer"
                  onClick={() =>
                    setSelectedProduct({
                      ...selectedProduct,
                      imgDetail1: selectedProduct.imgDetail3,
                    })
                  }
                />
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4">
              {selectedProduct.productName}
            </h1>
            <p className="text-gray-600 mb-6">{selectedProduct.specs}</p>

            <div className="flex items-center mb-6">
              <span className="mr-4">Quantity</span>
              <button className="bg-gray-200 px-3 py-1 rounded-l">-</button>
              <input
                type="text"
                defaultValue="1"
                className="w-12 text-center border-t border-b border-gray-200"
              />
              <button className="bg-gray-200 px-3 py-1 rounded-r">+</button>
            </div>

            <p className="text-2xl font-bold mb-6">
              ${selectedProduct.price.toFixed(2)}
            </p>

            <div className="flex space-x-4">
              <button className="bg-white text-black border border-black px-6 py-2 rounded">
                ADD TO CART
              </button>
              <button className="bg-red-600 text-white px-6 py-2 rounded">
                BUY NOW
              </button>
            </div>

            <div className="mt-8">
              <p>
                <strong>Texture:</strong> {selectedProduct.texture}
              </p>
              <p>
                <strong>Weight:</strong> {selectedProduct.weight}
              </p>
              <p>
                <strong>Size:</strong> {selectedProduct.size}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
