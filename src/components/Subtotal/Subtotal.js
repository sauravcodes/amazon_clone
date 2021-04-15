import React from "react";
import { Wrapper } from "./Subtotal.styles";
import { useStateValue } from "../StateProvider/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <Wrapper>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
            </p>
            <p>
              <input type="checkbox" />
              This contains a gift
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed To Checkout</button>
    </Wrapper>
  );
}

export default Subtotal;
