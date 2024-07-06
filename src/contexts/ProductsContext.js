import { createContext, useContext, useReducer } from "react";
import { products as allProducts } from "./../constants/products";

const ProductsContext = createContext(null);

const ProductsDispatchContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, dispatch] = useReducer(productsReducer, allProducts);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatchContext.Provider value={dispatch}>
        {children}
      </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}

export function useProductsDispatch() {
  return useContext(ProductsDispatchContext);
}

function productsReducer(_products, action) {
  switch (action.type) {
    case "filter": {
      const lowerCaseQuery = action.query.toLowerCase();
      return allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerCaseQuery) ||
          product.description.toLowerCase().includes(lowerCaseQuery)
      );
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
