import styled from "styled-components";

export const CartDivAll = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f52ba;
  width: 30%;
  justify-content: space-between;
  @media only screen and (max-width: 820px){
    width: 45%;
  }
  @media only screen and (max-width: 390px){
    width: 80%;
  }
`;

export const DivAllTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const DivAllBotton = styled.div`
display: flex;
flex-direction: column;
`;
export const DivDescCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  width:100%;
  padding: 10px 20px;
`;
export const UlProductsCart = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #0f52ba;
  max-height: 430px;
`;
export const DivBcgModal = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  background-color:  rgba(18, 18, 20, 0.2);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
`;
export const DivCartContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 10px;
background-color: #fff;
border-radius:  10px;
width: 310px;
height: 87px;
@media only screen and (max-width: 390px){
  width: 280px;
  height: 250px;
  flex-direction: row;
  justify-content: center;
}
`
export const DivSeparating = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 10px;
align-itens: center;
@media only screen and (max-width: 390px){
  flex-direction: column;
}
`
export const DivContentDesc = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 10px;
margin-top: 15px;
align-itens: center;
@media only screen and (max-width: 390px){
  flex-direction: column;
  justify-content: center;
}
`
export const DivName = styled.div`
width: 100px;
@media only screen and (max-width: 390px){
  width: 200px;
}
`
export const DivTitleFromElse = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap:9px;

`
export const DivWhithoutPrice = styled.div`

`
export const DivBtnAddLessCart = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 4px;
border: 1px solid transparent;
padding: 8px;
@media only screen and (max-width: 390px){
  border: 1px solid #e9e9e9
  border-radius: 8px
}

`
export const DivTotalsCart = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px;

`