import React, { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import { UlProductList } from "../StyledComponents/productsComponents";
import Product from "./product";

const ProductList = () => {
  //fazer um map com o product
  const { listProducts } = useContext(ProductsContext);

  return (
    <UlProductList>
      {listProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </UlProductList>
  );
};

export default ProductList;
