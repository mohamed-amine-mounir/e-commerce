import { PRODUCTS } from "../../products";
import { Product } from "../../pages/shop/product"; // Use the Product component

const ProudProducts = () => {
  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === "lamp"
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
