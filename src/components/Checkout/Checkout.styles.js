import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 10px;
  background-color: white;
  height: max-content;
  /* margin: 10px; */

  & h2 {
    margin-left: 16px;
  }
  & p {
    margin-left: 16px;
  }
`;

export const CheckoutTitle = styled.div``;
export const CheckoutLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CheeckoutRight = styled.div`
  display: flex;
  color: black;
`;
