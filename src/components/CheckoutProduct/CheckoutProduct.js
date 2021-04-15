import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import {
  Wrapper,
  CheckoutInfo,
  CheckoutPrice,
  ProductRating,
} from "./CheckoutProduct.styles";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Wrapper>
      <img src={image} alt="sdfsd" />

      <CheckoutInfo>
        <p>{title}</p>

        <CheckoutPrice>
          <small>$</small>
          <strong>{price}</strong>
        </CheckoutPrice>

        <ProductRating>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </ProductRating>

        <button onClick={removeFromBasket}> Remove From Basket</button>
      </CheckoutInfo>
    </Wrapper>
  );
}

export default CheckoutProduct;
