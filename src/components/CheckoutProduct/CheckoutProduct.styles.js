import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  & img {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }

  & button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    align-self: center;
    color: #111;
    margin-top: 10px;
    margin-left: 16px;
  }
`;

export const CheckoutInfo = styled.div`
  margin-left: 16px;
`;
export const CheckoutPrice = styled.div`
  margin-left: 16px;
`;
export const ProductRating = styled.div`
  display: flex;
`;
