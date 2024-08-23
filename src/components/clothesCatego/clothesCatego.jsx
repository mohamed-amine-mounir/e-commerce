// import { Categories } from "../components";

// import { PRODUCTS } from "../../products";

// const kitchenCatego = ({ category }) => {
//   const filteredProducts = PRODUCTS.filter(
//     (product) => product.category === "kitchen"
//   );

//   return (
//     <>
//       <Categories />(
//       <div className="container">
//         <div className="shopping">
//           <div className="cartItem text-center ">
//             <div className=" row">
//               {filteredProducts.map((product) => (
//                 <div
//                   className="product-item col-lg-3 col-md-4 col-sm-6"
//                   key={product.id}
//                   id="product"
//                 >
//                   <img src={product.productImage} alt={product.productName} />
//                   <div className="description">
//                     <p>
//                       <b>{product.productName}</b>
//                     </p>
//                     <p>${product.price}</p>
//                   </div>
//                   <button className="addToCartBttn">Add To Cart</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       );
//     </>
//   );
// };

// export default kitchenCatego;
import { PRODUCTS } from "../../products";
import { Categories } from "../components";
import { Product } from "../../pages/shop/product"; // Use the Product component

const clothesCatego = () => {
  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === "clothes"
  );

  return (
    <>
      <Categories />
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

export default clothesCatego;
