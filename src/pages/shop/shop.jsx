import { PRODUCTS } from "../../products";
import { Product } from "./product";
import PropTypes from "prop-types";

export const Shop = () => {
  return (
    <div id="shop" className="">
      <div id="shopTitle"></div>
      <div className="products grid grid-cols-4 ">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
