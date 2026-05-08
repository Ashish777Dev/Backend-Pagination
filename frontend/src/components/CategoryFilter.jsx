import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";

const CategoryFilter = () => {
  const { productCategory, setCategory, setCurrentPage } =
    useContext(ProductContext);

  return (
    <div className="category-filter">
      {productCategory.map((cate) => (
        <button
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
