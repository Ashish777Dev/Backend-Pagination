import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "./../context/ProductContext";
const ProductSection = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-section">
      {products.map((item) => (
        <ProductCard
          key={item._id}
          name={item.name}
          price={item.price}
          image={item.emoji}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ProductSection;
