import styled from "styled-components";
import searchLogo from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export const Wrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  & img {
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
    cursor: pointer;
  }
`;
export const SearchIcon = styled(searchLogo)`
  background-color: #cd9042;
  padding: 5px;
  height: 22px;
`;
export const Search = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;

  & input {
    height: 14px;
    padding: 10px;
    border: none;
    width: 100%;
  }
`;
export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const Option = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 14px;
  margin-right: 14px;
  cursor: pointer;
`;
export const LineOne = styled.div`
  font-size: 11px;
`;
export const LineTwo = styled.div`
  font-size: 14px;
  font-weight: 800;
`;
export const OptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
`;
export const BasketLineTwo = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Basket = styled(ShoppingBasketIcon)``;
