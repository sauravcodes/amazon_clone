import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  margin: auto;
  height: 400px;
  margin: 20px;

  & p {
    margin: 0;
  }

  & img {
    max-height: 280px;
    max-width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  & button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    align-self: center;
  }
`;
export const ProductPrice = styled.div``;

export const ProductRating = styled.div`
  display: flex;
`;
export const Container = styled.div`
  margin: 5px;
`;
