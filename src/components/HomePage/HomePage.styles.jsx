import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;

  & img:first-child {
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: -1;
    margin-bottom: -150px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  z-index: 1;
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
`;
