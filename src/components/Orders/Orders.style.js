import styled from "styled-components";


export const MainWrapper = styled.div`
  padding: 50px;
  display: flex;
`;
export const MainTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 50px 0;
`;

export const OrderTitle = styled.h3`
  font-size: 20px;
  margin: 0 20px 0 0;
  align-self: center;
`;

export const OrderWrapper = styled.div`
  display: flex;
  border: 1px solid rgba(215, 189, 189, 0.8);
  color: #B5B5B5;
  border-radius: 5px;
  margin: 0 0 10px 0;
  justify-content: stretch;
  transition: box-shadow 0.3s ease-in-out;
  padding: 5px;
  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CountSubTitle = styled.div`
  
`;

export const Item = styled.div`
  display: flex;
  height: auto;
`;

export const ItemImage = styled.div`
  border: 1px solid #b5b5b5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #b5b5b5;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 20px;

    rect {
      color: #483e3e;
    }

    path {
      color: #483e3e;
    }
  }
`;

export const ProductAmount = styled.div`
  display: flex;
`;

export const Count = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 30px 0 30px;
  font-size: 22px;
  font-weight: 500;
`;

export const Busket = styled.div` 
  svg {
    width: 50px;
    height: 50px;
    color: #b5b5b5;
  }
`;
export const Guarantees = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DetailedProduct = styled.div`
  border: 1px solid #000;
  width: 300px;
  position: relative;
  margin: 0 0 10px 0;
  img {
    width: 20px;
    height: 20px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -5px;
    right: -10px;
    border-radius: 50%;
    background-color: #FFF;
  }
`;

export const Button = styled.div`
  width: 70px;
  height: 30px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;