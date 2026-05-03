import { useState, useEffect, createContext } from "react";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 6;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/products?page=${currentPage}&limit=${postPerPage}`,
        );

        if (!res.ok) {
          console.log(`Failed to connect the API ${res.status}`);
          return;
        }
        const json = await res.json();

        setProducts(json.data.products);

        //set totalPages to total documents
        setTotalPages(Math.ceil(json.total / postPerPage));
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
  }, [currentPage]);
  console.log(totalPages);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, totalPages, currentPage, setCurrentPage }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };
