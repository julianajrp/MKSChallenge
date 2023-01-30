import styled from "styled-components";

export const DivProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  height: 340px;
  width: 230px;
  border-radius: 12px;
  box-shadow: 5px 5px 100px 2px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;
  &:hover {
    background-color: #fff;
    border: 2px solid #1d6fea;
  }

`;

export const DivLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 7px;
  margin: 8px;
 
`;

export const UlProductList = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 15px;
margin: 100px;
`