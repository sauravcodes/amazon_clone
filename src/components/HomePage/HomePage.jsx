import React from "react";
import ProductData from "../Header/ProductData/ProductData";
import { HomeWrapper, ProductContainer } from "./HomePage.styles";

const HomePage = () => {
  return (
    <HomeWrapper>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="home banner"
      />

      <ProductContainer>
        <ProductData
          id="sjd"
          title="hsbdhjsbdhbh"
          price={250}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />

        <ProductData
          id="sjd"
          title="hsbdhjsbdhbh"
          price={250}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
      </ProductContainer>

      <ProductContainer>
        <ProductData
          id="sjd"
          title="hsbdhjsbdhbh"
          price={250}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/storm-blue.png?v=1613734332"
        />

        <ProductData
          id="sjd"
          title="hsbdhjsbdhbh"
          price={250}
          rating={5}
          image="https://d2xamzlzrdbdbn.cloudfront.net/products/2ebd05ef-390e-49df-bdc9-290a497331bb_416x416.jpg"
        />
        <ProductData
          id="sjd"
          title="hsbdhjsbdhbh"
          price={250}
          rating={5}
          image="https://www.thebalance.com/thmb/ucptgMgsq8JsYWoSd5LtQ9EQO_k=/542x542/smart/filters:no_upscale()/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png"
        />
      </ProductContainer>

      <ProductContainer>
        <ProductData
          id="sjd"
          title="hsbdhjsbdhbh"
          price={250}
          rating={5}
          image="https://www.thebalance.com/thmb/ucptgMgsq8JsYWoSd5LtQ9EQO_k=/542x542/smart/filters:no_upscale()/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png"
        />
      </ProductContainer>
    </HomeWrapper>
  );
};

export default HomePage;
