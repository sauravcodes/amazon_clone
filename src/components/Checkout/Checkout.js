import React from "react";
import {
  Wrapper,
  CheckoutTitle,
  CheckoutLeft,
  CheeckoutRight,
} from "./Checkout.styles";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <Wrapper>
      <CheckoutLeft>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
          alt="ad banner"
        />
        {!basket.length ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              'Add to basket' next to the item
            </p>
          </div>
        ) : (
          <div>
            <CheckoutTitle>
              Your Shopping Basket
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </CheckoutTitle>
          </div>
        )}
      </CheckoutLeft>
      {basket.length > 0 && (
        <CheeckoutRight>
          <Subtotal />
        </CheeckoutRight>
      )}
    </Wrapper>
  );
};

export default Checkout;
