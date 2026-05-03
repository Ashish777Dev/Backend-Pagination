const styleCategory = {
  bakery: { backgroundColor: "#FF653F", color: "#FFFFFF" },
  dairy: { backgroundColor: "#DFF1F1", color: "#000000" },
  dessert: { backgroundColor: "#4B4038", color: "#FFFFFF" },
  drink: { backgroundColor: "#44ACFF", color: "#FFFFFF" },
  "fast food": { backgroundColor: "#FF0000", color: "#FFFFFF" },
  fruit: { backgroundColor: "#1DCD9F", color: "#FFFFFF" },
  grains: { backgroundColor: "#D2C4B4", color: "#000000" },
  meat: { backgroundColor: "#C3110C", color: "#FFFFFF" },
  pantry: { backgroundColor: "#D2B48C", color: "#000000" },
  seafood: { backgroundColor: "#0077BE", color: "#FFFFFF" },
  snack: { backgroundColor: "#FF8C00", color: "#FFFFFF" },
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
      <button className="cart-btn">Add To Cart 🛒</button>
    </div>
  );
};

export default ProductCard;
