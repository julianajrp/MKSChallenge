import React, { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import close from "../../assets/cancel2.png";
import {
  ButtonCloseCart,
  EndShopBtn,
} from "../StyledComponents/buttonsComponents";
import {
  CartDivAll,
  DivAllBotton,
  DivAllTop,
  DivBcgModal,
  DivDescCart,
  UlProductsCart,
} from "../StyledComponents/cartComponents";
import CartProduct from "./cartProduct";
import CartTotal from "./cartTotal";
import { TitleCart } from "../StyledComponents/textComponents";

const Cart = () => {
  const { setModalOnAndOff, currentSale, setCurrentSale } =
    useContext(ProductsContext);
  const closeModal = () => {
    setModalOnAndOff(false);
  };
  const finishShop = () => {
    setModalOnAndOff(false);
    setCurrentSale([]);
  };
  return (
    <DivBcgModal>
      <CartDivAll>
        <DivAllTop>
          <DivDescCart>
            <TitleCart>Carrinho de compras</TitleCart>
            <ButtonCloseCart onClick={closeModal}>
              <img className="imgModalClose" src={close} alt="" />
            </ButtonCloseCart>
          </DivDescCart>
          <UlProductsCart className="scroll">
            {currentSale.map((cartProduct) => {
              return (
                <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
              );
            })}
          </UlProductsCart>
        </DivAllTop>
        <DivAllBotton>
          <CartTotal />
          <EndShopBtn onClick={finishShop}>Finalizar Compras</EndShopBtn>
        </DivAllBotton>
      </CartDivAll>
    </DivBcgModal>
  );
};

export default Cart;
