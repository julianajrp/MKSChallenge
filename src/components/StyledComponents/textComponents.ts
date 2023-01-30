// #2c2c2c
import styled from "styled-components";

export const TitleProduct = styled.p`
color: #2c2c2c;
font-family: 'Unbounded', cursive;
font-size: 14px;
letter-spacing: 1px;
 @media only screen and (max-width: 768px){

 }

`
export const DescProduct = styled.p`
color: #6e6e6e;
font-family: Roboto;
font-size: 14px;
text-align: left;
padding: 0px 9px;
height: 85px;

`
export const PriceTag = styled.h3`
background-color: #373737;
color: #fff;
padding: 2px;
border-radius: 6px;
font-family: 'Unbounded', cursive;
font-weight: 600;
font-size: 16px;
`
export const TitleCart = styled.h1`
  color: #fff;
  font-size: 26px;
  text-align: left;
  width: 200px;
`;
export const TitleCartProduct = styled.p`
  color: #2c2c2c;
  font-family: 'Unbounded', cursive;
  font-size: 10px;
  letter-spacing: 1px;
  text-align: left;
  @media only screen and (max-width: 390px){
    text-align: center;
    font-size: 18px;
  }
`;
export const QntCartProduct = styled.p`
  color: #6e6e6e;
  font-family: 'Unbounded', cursive;
  font-size: 8px;
  letter-spacing: 1px;
  text-align: left;
  @media only screen and (max-width: 390px){
    display: none;
  }
`;
export const AddLessCartProduct = styled.p`
  color: #6e6e6e;
  font-family: 'Unbounded', cursive;
  font-size: 8px;
  letter-spacing: 1px;
  text-align: left;
  @media only screen and (max-width: 390px){
    font-size: 12px;
  }
`;
export const PriceCartProduct = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bolder;
  @media only screen and (max-width: 390px){
    background-color: #373737;
    color: #fff;
    padding: 4px;
    border-radius: 6px;
    font-family: 'Unbounded', cursive;
    font-weight: 600;
    font-size: 16px;
  }

`;
export const TotalCartValues = styled.h3`
  color: #fff;
  font-family: Roboto;
  font-size: 22px;
  margin: 12px;
  font-weight: bolder;

`;