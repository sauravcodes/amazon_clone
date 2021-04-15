import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
  align-items: center;

  & img {
    width: 100px;
    object-fit: contain;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid lightgray;

  & h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  & input {
    width: 98%;
    height: 30px;
  }

  & p {
    font-size: 12px;
    width: 250px;
  }
`;
