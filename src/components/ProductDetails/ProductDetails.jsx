//   <div className="container mx-auto px-4 py-8">
//     <div className="flex flex-col md:flex-row">
//       {/* Product Image */}
//       {PRODUCTS.map(product)=>(

//       <div className="md:w-1/2">
//         <img
//           src={currentImage}
//           alt={product.productName}
//           className="w-full rounded-lg shadow-lg"
//         />
//         <div className="flex mt-4 space-x-4">
//           <img
//             src={product.productImage}
//             alt="Main Product"
//             className="w-20 h-20 rounded-md cursor-pointer"
//             onClick={() =>
//               product(product.productImage)
//             }
//           />
//           <img
//             src={product.imgDetail1}
//             alt="Detail 1"
//             className="w-20 h-20 rounded-md cursor-pointer"
//             onClick={() => product(product.imgDetail1)}
//           />
//           <img
//             src={product.imgDetail2}
//             alt="Detail 2"
//             className="w-20 h-20 rounded-md cursor-pointer"
//             onClick={() => product(product.imgDetail2)}
//           />
//         </div>
//       </div>

//       <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
//         <h1 className="text-3xl font-bold mb-4">
//           {product.productName}
//         </h1>
//         <p className="text-gray-600 mb-6">{product.specs}</p>

//         <div className="flex items-center mb-6">
//           <span className="mr-4">Quantity</span>
//           <button className="bg-gray-200 px-3 py-1 rounded-l">-</button>
//           <input
//             type="text"
//             defaultValue="1"
//             className="w-12 text-center border-t border-b border-gray-200"
//           />
//           <button className="bg-gray-200 px-3 py-1 rounded-r">+</button>
//         </div>

//         <p className="text-2xl font-bold mb-6">
//           ${currentProduct.price.toFixed(2)}
//         </p>

//         <div className="flex space-x-4">
//           <button className="bg-white text-black border border-black px-6 py-2 rounded">
//             ADD TO CART
//           </button>
//           <button className="bg-red-600 text-white px-6 py-2 rounded">
//             BUY NOW
//           </button>
//         </div>

//         {/* Additional Product Details */}
//         <div className="mt-8">
//           <p>
//             <strong>Texture:</strong> {currentProduct.texture}
//           </p>
//           <p>
//             <strong>Weight:</strong> {currentProduct.weight}
//           </p>
//           <p>
//             <strong>Size:</strong> {currentProduct.size}
//           </p>
//         </div>
// );}

//       </div>

//     </div>
//   </div>
// import { PRODUCTS } from "../../products"; // Adjust the import path as needed
// import { useState } from "react";

// function ProductDetails() {
//   const [currentImage, setCurrentImage] = useState(ProductDetails.imgDetail1);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row">
//         {/* Map through PRODUCTS */}
//         {PRODUCTS.map((ProductDetails) => (
//           <div key={ProductDetails.id}>
//             {/* ProductDetails Image */}
//             <div className="md:w-1/2">
//               <img
//                 src={ProductDetails.imgDetail1}
//                 alt={ProductDetails.ProductDetailsName}
//                 className="w-full rounded-lg shadow-lg"
//               />
//               <div className="flex mt-4 space-x-4">
//                 <img
//                   src={ProductDetails.imgDetail2}
//                   alt="Main ProductDetails"
//                   className="w-20 h-20 rounded-md cursor-pointer"
//                   onClick={() => setCurrentImage(ProductDetails.imgDetail1)} // Updates currentImage
//                 />
//                 <img
//                   src={ProductDetails.imgDetail1}
//                   alt="Detail 1"
//                   className="w-20 h-20 rounded-md cursor-pointer"
//                   onClick={() => ProductDetails(ProductDetails.imgDetail1)}
//                 />
//                 <img
//                   src={ProductDetails.imgDetail2}
//                   alt="Detail 2"
//                   className="w-20 h-20 rounded-md cursor-pointer"
//                   onClick={() => ProductDetails(ProductDetails.imgDetail2)}
//                 />
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
//               <h1 className="text-3xl font-bold mb-4">
//                 {ProductDetails.productName}
//               </h1>
//               <p className="text-gray-600 mb-6">{ProductDetails.specs}</p>

//               <div className="flex items-center mb-6">
//                 <span className="mr-4">Quantity</span>
//                 <button className="bg-gray-200 px-3 py-1 rounded-l">-</button>
//                 <input
//                   type="text"
//                   defaultValue="1"
//                   className="w-12 text-center border-t border-b border-gray-200"
//                 />
//                 <button className="bg-gray-200 px-3 py-1 rounded-r">+</button>
//               </div>

//               <p className="text-2xl font-bold mb-6">
//                 ${ProductDetails.price.toFixed(2)}
//               </p>

//               <div className="flex space-x-4">
//                 <button className="bg-white text-black border border-black px-6 py-2 rounded">
//                   ADD TO CART
//                 </button>
//                 <button className="bg-red-600 text-white px-6 py-2 rounded">
//                   BUY NOW
//                 </button>
//               </div>

//               {/* Additional Product Details */}
//               <div className="mt-8">
//                 <p>
//                   <strong>Texture:</strong> {ProductDetails.texture}
//                 </p>
//                 <p>
//                   <strong>Weight:</strong> {ProductDetails.weight}
//                 </p>
//                 <p>
//                   <strong>Size:</strong> {ProductDetails.size}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;
import { useState } from "react";
import { PRODUCTS } from "../../products"; // Adjust the import path as needed

function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product

  // Handler to select a product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Render the list of products to select from
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* List of products */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{product.productName}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        {selectedProduct && (
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
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
