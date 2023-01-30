import React, { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import { DivTotalsCart } from "../StyledComponents/cartComponents";
import { TotalCartValues } from "../StyledComponents/textComponents";

const CartTotal = () => {
  const { currentSale } = useContext(ProductsContext);
  function totalSale() {
    let prices = currentSale.reduce(
      (a, b) => a + Number(b.price) * (b.counter ? b.counter : 1),
      0
    );
    return prices;
  }
  let allSalesPrice = totalSale();
  return (
    <DivTotalsCart>
      <TotalCartValues>Total</TotalCartValues>
      <TotalCartValues>R${allSalesPrice}</TotalCartValues>
    </DivTotalsCart>
  );
};

export default CartTotal;
