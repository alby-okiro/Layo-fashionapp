import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { PRODUCTS } from "../app/shared/PRODUCTS";
import Product from "../features/products/ProductDisplay";




const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const product = PRODUCTS.map((item) => (
        <Product
          name={item.name}
          url={item.imageUrl}
          price={item.price}
          description={item.description}
        />
      ));
    
    return (
      <div className="App">
         <Carousel responsive={responsive}>
               {product}
          </Carousel>
      </div>
    );
};

export default HomePage;