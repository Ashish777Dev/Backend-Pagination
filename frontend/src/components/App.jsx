import { useContext } from "react";
import { ProductContext } from "./../context/ProductContext";
import CategoryFilter from "./CategoryFilter";
import ProductSection from "./ProductSection";
import Pagination from "./Pagination";

function App() {
  const { totalPages, currentPage, setCurrentPage } =
    useContext(ProductContext);
  return (
    <div className="App">
      <CategoryFilter />
      <ProductSection />
      <Pagination
        startPage={1}
        endPage={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
