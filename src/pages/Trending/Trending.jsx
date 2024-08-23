// import { useState } from "react";
// import { PRODUCTS } from "../../products";

// const Trending = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const productsToShow = 4; // Number of products to display at once

//   const scroll = (direction) => {
//     if (direction === "left") {
//       setStartIndex((prev) => Math.max(prev - 1, 0));
//     } else {
//       setStartIndex((prev) =>
//         Math.min(prev + 1, PRODUCTS.length - productsToShow)
//       );
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-2xl font-bold text-gray-800">Trending Now</h3>
//         <div className="flex space-x-2">
//           <button
//             onClick={() => scroll("left")}
//             className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
//             title="scroll left"
//             disabled={startIndex === 0}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
//             title="scroll right"
//             disabled={startIndex >= PRODUCTS.length - productsToShow}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {PRODUCTS.slice(startIndex, startIndex + productsToShow).map(
//           (product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <img
//                 src={product.productImage}
//                 alt={product.productName}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h4 className="font-semibold text-lg mb-2">
//                   {product.productName}
//                 </h4>
//                 <p className="text-gray-600 mb-4">${product.price}</p>
//                 <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Trending;
import { useState } from "react";
import { PRODUCTS } from "../../products";

const Trending = () => {
  const [startIndex, setStartIndex] = useState(0);
  const productsToShow = 4; // Number of products to display at once

  // Filter products to only include furniture
  const furnitureProducts = PRODUCTS.filter(
    (product) => product.category === "chair"
  );

  const scroll = (direction) => {
    if (direction === "left") {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setStartIndex((prev) =>
        Math.min(prev + 1, furnitureProducts.length - productsToShow)
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Trending Furniture</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
            title="scroll left"
            disabled={startIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
            title="scroll right"
            disabled={startIndex >= furnitureProducts.length - productsToShow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out space-x-4">
          {furnitureProducts
            .slice(startIndex, startIndex + productsToShow)
            .map((product) => (
              <div key={product.id} className="flex-none w-64">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg mb-2">
                      {product.productName}
                    </h4>
                    <p className="text-gray-600 mb-1">{product.texture}</p>
                    <p className="text-blue-600 font-bold mb-2">
                      ${product.price}
                    </p>
                    <p className="text-sm text-gray-500 mb-1">
                      Weight: {product.weight}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Size: {product.size}
                    </p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
