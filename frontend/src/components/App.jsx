import { useContext } from "react";
import ProductSection from "./ProductSection";
import { ProductContext } from "./context/ProductContext";
import Pagination from "./Pagination";

function App() {
  const { totalPages, currentPage, setCurrentPage } =
    useContext(ProductContext);
  return (
    <>
      <ProductSection />
      <Pagination
        startPage={1}
        endPage={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
