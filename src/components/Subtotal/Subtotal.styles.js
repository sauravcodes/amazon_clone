import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100px;
  padding: 20px;
  margin: 8px 0 0 0;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;

  & :first-child {
    margin-bottom: 0px;
    margin-top: 0px;
    padding: 0;
  }

  & button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    align-self: center;
    width: 100%;
  }
`;
export const TextDiv = styled.div``;
