import { useState } from "react";
import React from "react";
import { createContext, useEffect } from "react";
import axios from "axios";

//INTERFACES
export interface iProducts {
  id: number | string;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  counter?: number;
}
// export interface iExibedProducts {
//   id: number | string;
//   name: string;
//   photo: string;
//   price: number;
//   counter: number;
//   brand: string;
//   description: string;
// }
interface iProductsProviderProps {
  children: React.ReactNode;
}

interface iResponse {
  data: iData;
}

interface iData {
  count: number;
  products: iProducts[];
}

interface iProductsContext {
  modalOnAndOff: boolean;
  setModalOnAndOff: React.Dispatch<React.SetStateAction<boolean>>;
  listProducts: iProducts[]; //checar
  setListProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  baseUrl: string;
  setProductId: React.Dispatch<React.SetStateAction<string>>;
  productId: string;
  productTitle: string;
  setProductTitle: React.Dispatch<React.SetStateAction<string>>;
  currentSale: iProducts[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProducts[]>>;

  // count: number;
  // setCount: React.Dispatch<React.SetStateAction<number>>;
}

//LOGIC CONTEXT
export const ProductsContext = createContext<iProductsContext>(
  {} as iProductsContext
);

export const ProductsProvider = ({ children }: iProductsProviderProps) => {
  const baseUrl = "https://mks-challenge-api-frontend.herokuapp.com/api/v1/";

  const [listProducts, setListProducts] = useState([] as iProducts[]);
  const [modalOnAndOff, setModalOnAndOff] = useState(false);
  const [productTitle, setProductTitle] = useState<string>(""); //ver se é util
  const [productId, setProductId] = useState<string>(""); //ver se é util
  const [currentSale, setCurrentSale] = useState([] as iProducts[]);

  // const [count, setCount] = useState<number>(1);

  useEffect(() => {
    async function getProductFromApi() {
      try {
        const response: iResponse = await axios.get(
          `${baseUrl}products?page=1&rows=5&sortBy=id&orderBy=ASC`
        );
        setListProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProductFromApi();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        baseUrl,
        modalOnAndOff,
        setModalOnAndOff,
        listProducts,
        setListProducts,
        productTitle,
        setProductTitle,
        productId,
        setProductId,
        currentSale,
        setCurrentSale,

        // count,
        // setCount,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
