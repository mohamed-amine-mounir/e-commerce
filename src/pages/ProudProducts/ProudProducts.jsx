// import { PRODUCTS } from "../../products";
// import { Product } from "../shop/product";
// const ProudProducts = () => {
//   return (
//     <>
//       (
//       <div className="container">
//         <div className="container mx-auto px-4 py-8">
//           <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
//             Products we are proud of
//           </h2>
//           <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {PRODUCTS.slice(0, 8).map((product) => (
//               <Product data={product} key={product.id} />
//             ))}
//           </div>
//         </div>
//       </div>
//       );
//     </>
//   );
// };

// export default ProudProducts;
import { PRODUCTS } from "../../products";
import { Product } from "../../pages/shop/product"; // Use the Product component

const ProudProducts = () => {
  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === "clothes"
  );

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProudProducts;
