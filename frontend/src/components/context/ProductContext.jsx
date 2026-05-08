import { useState, useEffect, createContext } from "react";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productCategory, setProductCategory] = useState([]);
  const [category, setCategory] = useState("All");
  const postPerPage = 9;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const url =
          category === "All"
            ? `/products?page=${currentPage}&limit=${postPerPage}`
            : `/products?category=${category}&page=${currentPage}&limit=${postPerPage}`;
        const res = await fetch(`${import.meta.env.VITE_API_URL}${url}`);

        if (!res.ok) {
          console.log(`Failed to connect the API ${res.status}`);
          return;
        }
        const json = await res.json();

        setProducts(json.data.products);

        //set totalPages to total documents

        setTotalPages(Math.ceil(json.total / postPerPage));

        console.log(totalPages);

        //Get All Product Categories
        console.log(json);
        setProductCategory(json.categories);
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
  }, [currentPage, category]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        totalPages,
        currentPage,
        setCurrentPage,
        productCategory,
        category,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };
