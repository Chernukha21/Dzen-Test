import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  width: 100%;
  background-color: #FFF;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
`;
export const LeftSide = styled.div`
  margin: 0 0 0 150px;
  display: flex;
  align-items: center;
`;
export const RightSide = styled.div`
  padding: 10px;
  min-width: 60px;
  svg {
    width: 15px;
    height: 15px;
    color: green;
  }
`;

export const InputWrapper = styled.div`
  input {
    width: 300px;
    height: 30px;
    outline: none;
    border: none;
    box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-size: 16px;
    padding: 3px 3px 3px 20px;
    &::placeholder {
      font-weight: 700;
      font-size: 16px;
      color: #000;
    }
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 60px;
  }
`;

export const LogoName = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  margin: 0 40px 0 20px;
  color: #14bd14;
  font-weight: 700;
`;
export const Day = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
export const DetailedDate = styled.div`
  
`;
export const CurrentTime = styled.div`
  
`;