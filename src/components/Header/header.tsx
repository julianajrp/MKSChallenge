import React, { useContext } from "react";
import { ButtonCartHeader } from "../StyledComponents/buttonsComponents";
import {
  HeaderComplete,
  LogoAll,
  LogoOff,
  TotalProducts,
} from "../StyledComponents/headerComponents";
import cartyy from "../../assets/cartyy.svg";
import { ProductsContext } from "../../context/productsContext";
const Header = () => {
  //adicionar funçao que conta a quantidade de itens no carrinho e colocar no TotalProducts

  const { setModalOnAndOff, currentSale } = useContext(ProductsContext);
  const openModal = () => {
    setModalOnAndOff(true);
  };
  function totalProducts() {
    let itens = currentSale.reduce(
      (a, b) => a + (b.counter ? b.counter : 1),
      0
    );
    return itens;
  }
  let lenght = totalProducts();

  return (
    <HeaderComplete>
      <LogoAll>
        MKS <LogoOff> Sistemas</LogoOff>
      </LogoAll>
      <ButtonCartHeader onClick={openModal}>
        <img className="imgCart" src={cartyy} alt="" />
        <TotalProducts> {lenght} </TotalProducts>
      </ButtonCartHeader>
    </HeaderComplete>
  );
};

export default Header;
