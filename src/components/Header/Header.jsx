import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase.js";
import { useStateValue } from "../StateProvider/StateProvider.js";
import {
  Wrapper,
  Search,
  HeaderNav,
  Option,
  LineOne,
  LineTwo,
  SearchIcon,
  Basket,
  OptionBasket,
  BasketLineTwo,
} from "./Header.styles.js";

const Header = () => {
  const history = useHistory();
  const [{ user, basket }] = useStateValue();

  console.log(user?.email);

  const login = () => {
    alert("hello");
    if (user) {
      auth.signOut();
    }
  };
  return (
    <Wrapper>
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="Logo"
        onClick={() => history.push("/")}
      />

      <Search>
        <input type="text" />
        <SearchIcon />
      </Search>

      <HeaderNav>
        <Option onClick={() => !user && history.push("/login")}>
          <LineOne>Hello {user?.email}</LineOne>
          <LineTwo onClick={login}>{user ? "Sign Out" : "Sign In"}</LineTwo>
        </Option>
        <Option>
          <LineOne>Returns </LineOne>
          <LineTwo> & Orders</LineTwo>
        </Option>
        <Option>
          <LineOne>Your</LineOne>
          <LineTwo>Prime</LineTwo>
        </Option>
      </HeaderNav>

      <OptionBasket onClick={() => history.push("/checkout")}>
        <Basket />
        <BasketLineTwo>{basket?.length}</BasketLineTwo>
      </OptionBasket>
    </Wrapper>
  );
};

export default Header;
