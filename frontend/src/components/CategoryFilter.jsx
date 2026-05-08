import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";
const styleCategory = {
  All: { backgroundColor: "#27ae60", color: "#FFFFFF" },
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

const CategoryFilter = () => {
  const { productCategory, setCategory, setCurrentPage } =
    useContext(ProductContext);

  const allCategories = ["All", ...productCategory];

  return (
    <div className="category-filter">
      {allCategories.map((cate) => (
        <button
          style={styleCategory[cate]}
          className="category-btn"
          onClick={() => {
            setCategory(cate);
            setCurrentPage(1); //Rest to page 1 when each filter button Clicked
          }}
        >
          {cate}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
