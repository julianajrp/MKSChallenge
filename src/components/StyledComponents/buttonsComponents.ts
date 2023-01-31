import styled from "styled-components";

export const ButtonCartHeader = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background-color: #eeeeee;
  margin-right: 40px;
  padding 8px 14px;
  border-radius: 4px;
  border: 1px solid transparent;
  &:hover {
    background-color: #fff;
    border: 1px solid #fff;
  }
`;
export const ButtonBuyProduct = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  background-color:#0f52ba;
  color: #fff;
  padding: 10px 40px;
  border-radius: 0 0 12px 12px;
  font-family: 'Unbounded', cursive;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 18px;
  border: 1px solid transparent;
  width: 230px;
  max-width: 100%;

  &:hover {
    background-color: #1d6fea;
    border: 1px solid transparent;
  }
`;
export const ButtonCloseCart = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
export const ButtonDeleteItemFromCart = styled.button`
  position: relative;
  top: -35px;
  left: 6px;
  cursor: pointer;
  @media only screen and (max-width: 390px){
    position: relative;
    top: -74px;
    left: -4px;
  }
`;
export const EndShopBtn = styled.button`
  color: #fff;
  background-color: #000;
  font-size: 30px;
  font-weight: bolder;
  font-family: Roboto;
  cursor: pointer;
  padding: 15px;
`;
export const AddLessBtnCartProduct = styled.button`
  color: #6e6e6e;
  font-family: 'Unbounded', cursive;
  font-size: 8px;
  letter-spacing: 1px;
  text-align: left;
  cursor: pointer;
  @media only screen and (max-width: 390px){
    font-size: 12px;
  }
`;