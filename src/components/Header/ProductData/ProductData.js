import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import {
  Wrapper,
  ProductPrice,
  ProductRating,
  Container,
} from "./ProductData.styles";

function ProductData({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <Wrapper>
      <Container>
        <p>{title}</p>
        <ProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </ProductPrice>
        <ProductRating>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </ProductRating>
      </Container>
      <img src={image} alt="sjnd" />
      <button onClick={addToBasket}>Add to basket</button>
    </Wrapper>
  );
}

export default ProductData;
