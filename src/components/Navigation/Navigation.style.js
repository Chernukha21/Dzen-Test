import styled from "styled-components";

export const Wrapper = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  height: 100vh;
  justify-content: center;
  align-items: center;
  width: 150px;
  li{
    list-style: none;
    text-decoration: none;
  }
`;