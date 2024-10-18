import { Product } from "../../pages/shop/product";
import { PRODUCTS } from "../../products";
const ProudProducts = () => {
  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === "lamp"
  );

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <Product data={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProudProducts;
