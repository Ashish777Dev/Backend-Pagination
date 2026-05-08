const styleCategory = {
  bakery: { backgroundColor: "#FF653F", color: "#FFFFFF" },
  beverage: { backgroundColor: "#44ACFF", color: "#FFFFFF" }, // Replaces 'drink'
  dairy: { backgroundColor: "#DFF1F1", color: "#000000" },
  frozen: { backgroundColor: "#00D2FF", color: "#000000" }, // New Category: Icy Blue
  fruit: { backgroundColor: "#1DCD9F", color: "#FFFFFF" },
  meat: { backgroundColor: "#C3110C", color: "#FFFFFF" },
  pantry: { backgroundColor: "#D2B48C", color: "#000000" },
  seafood: { backgroundColor: "#0077BE", color: "#FFFFFF" },
  snacks: { backgroundColor: "#FF8C00", color: "#FFFFFF" }, // Updated from 'snack'
  vegetable: { backgroundColor: "#228B22", color: "#FFFFFF" },
};
const ProductCard = ({ name, price, image, category }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <span className="product-category" style={styleCategory[category]}>
          {category}
        </span>
        <span className="image">{image}</span>
      </div>
      <div className="product-details">
        <p className="name">{name}</p>
        <p className="price">{price}₨</p>
      </div>
    </div>
  );
};

export default ProductCard;
