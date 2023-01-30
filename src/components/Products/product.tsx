import { useContext } from "react";
import bag from "../../assets/bolsa.png";
import { iProducts, ProductsContext } from "../../context/productsContext";
import { ButtonBuyProduct } from "../StyledComponents/buttonsComponents";
import { DivLabel, DivProduct } from "../StyledComponents/productsComponents";
import {
  DescProduct,
  PriceTag,
  TitleProduct,
} from "../StyledComponents/textComponents";
export interface iProductProps {
  product: iProducts;
}

const Product = ({ product }: iProductProps) => {
  const { currentSale, setCurrentSale } = useContext(ProductsContext);

  function addProductToCard(currentProduct: iProducts) {
    const findProduct: iProducts | undefined = currentSale.find(
      //encontro o produto todo
      (cartProduct) => cartProduct.id === currentProduct.id
    );
    console.log(findProduct);

    if (findProduct) {
      findProduct["counter"] = findProduct["counter"]
        ? findProduct["counter"] + 1
        : 1; //verificação de se esse counter 'existe' pro ts nao reclamar

      const findedIndex: number | undefined = currentSale.findIndex(
        //encontro o produto todo
        (cartProduct) => cartProduct.id === currentProduct.id
      );

      currentSale.splice(findedIndex, 1);
      setCurrentSale([...currentSale, findProduct]);

      console.log("Item colocado com sucesso!");
    } else {
      currentProduct["counter"] = 1; //jeito de adicionar ou modificicar um item ao objeto

      setCurrentSale([...currentSale, currentProduct]);

      console.log("Item colocado com sucesso!");
    }
    // setCurrentSale([...currentSale, currentProduct]);
    // console.log("Item colocado com sucesso!");
  }
  function priceSimplify(price: number) {
    let newPrice = String(price).split(".");
    return newPrice[0];
  }
  let priceSimplified = priceSimplify(product.price);
  return (
    <DivProduct>
      <img className="imgProduct" src={product.photo} alt="" />
      <DivLabel>
        <TitleProduct>{product.name}</TitleProduct>
        <PriceTag>R${priceSimplified}</PriceTag>
      </DivLabel>
      <DescProduct> {product.description} </DescProduct>
      <ButtonBuyProduct onClick={(e) => addProductToCard(product)}>
        <img className="imgBuy" src={bag} alt="" />
        <p>COMPRAR</p>
      </ButtonBuyProduct>
    </DivProduct>
  );
};

export default Product;
