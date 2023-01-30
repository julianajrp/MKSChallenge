import close from "../../assets/cancel2.png";
import {
  DivBtnAddLessCart,
  DivCartContent,
  DivContentDesc,
  DivName,
  DivSeparating,
  DivTitleFromElse,
} from "../StyledComponents/cartComponents";
import {
  AddLessCartProduct,
  PriceCartProduct,
  QntCartProduct,
  TitleCartProduct,
} from "../StyledComponents/textComponents";
import {
  AddLessBtnCartProduct,
  ButtonDeleteItemFromCart,
} from "../StyledComponents/buttonsComponents";
import { iProducts, ProductsContext } from "../../context/productsContext";
import { useContext } from "react";

//EXTRA INTERFACE
interface iCartProps {
  cartProduct: iProducts;
}
//FUNCTION
const CartProduct = ({ cartProduct }: iCartProps) => {
  const { currentSale, setCurrentSale } = useContext(ProductsContext);

  function priceSimplify(price: number) {
    let newPrice = String(price).split(".");
    return newPrice[0];
  }
  let priceSimplified = priceSimplify(cartProduct.price);

  function removeProductFromCart(productToRemoveId: any) {
    const newList: any = currentSale.filter(
      (product) => product.id !== parseInt(productToRemoveId)
    );
    setCurrentSale(newList);
  }

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
  }

  function removeProductToCard(currentProduct: iProducts) {
    const findProduct: iProducts | undefined = currentSale.find(
      //encontro o produto todo
      (cartProduct) => cartProduct.id === currentProduct.id
    );
    console.log(findProduct);

    if (findProduct) {
      findProduct["counter"] = findProduct["counter"]
        ? findProduct["counter"] - 1
        : 1; //verificação de se esse counter 'existe' pro ts nao reclamar

      const findedIndex: number | undefined = currentSale.findIndex(
        //encontro o index do producto
        (cartProduct) => cartProduct.id === currentProduct.id
      );
      if (findProduct.counter === 0) {
        removeProductFromCart(findProduct.id);
        // currentSale.splice(findedIndex, 1);
      } else {
        console.log(findedIndex);
        currentSale.splice(findedIndex, 1);
        setCurrentSale([...currentSale, findProduct]);

        console.log("Item colocado com sucesso!");
      }

      //dentro do if eu faço validaçao, se for 1 clicar de novo tem q remover o produto epplice pra remover
    } else {
      currentProduct["counter"] = 1; //jeito de adicionar ou modificicar um item ao objeto

      setCurrentSale([...currentSale, currentProduct]);

      console.log("Item colocado com sucesso!");
    }
    // setCurrentSale([...currentSale, currentProduct]);
    // console.log("Item colocado com sucesso!");
  }
  return (
    <DivCartContent>
      <DivSeparating>
        <img className="imgProductCart" src={cartProduct.photo} alt="" />
        <DivContentDesc>
          <DivName>
            <TitleCartProduct>{cartProduct.name}</TitleCartProduct>
          </DivName>
          <DivTitleFromElse>
            <div>
              <QntCartProduct>Qtd</QntCartProduct>
              <DivBtnAddLessCart>
                <AddLessBtnCartProduct
                  onClick={(e) => removeProductToCard(cartProduct)}
                >
                  -
                </AddLessBtnCartProduct>
                <AddLessCartProduct>{cartProduct.counter}</AddLessCartProduct>
                <AddLessBtnCartProduct
                  onClick={(e) => addProductToCard(cartProduct)}
                >
                  +
                </AddLessBtnCartProduct>
              </DivBtnAddLessCart>
            </div>
            <PriceCartProduct>R${priceSimplified}</PriceCartProduct>
          </DivTitleFromElse>
        </DivContentDesc>
      </DivSeparating>
      <ButtonDeleteItemFromCart
        id={String(cartProduct.id)}
        onClick={(e) => removeProductFromCart(e.currentTarget.id)}
      >
        <img className="imgDeleteItem" src={close} alt="" />
      </ButtonDeleteItemFromCart>
    </DivCartContent>
  );
};

export default CartProduct;
