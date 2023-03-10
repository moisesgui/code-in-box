import Slider from "react-slick";
import { ProductCard } from "../productCard/ProductCard";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Carrousel = () => {

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div style={{ width: 350 }}>
          <ProductCard />
        </div>
        <div style={{ width: 350 }}>
          <ProductCard />
        </div>
        <div style={{ width: 350 }}>
          <ProductCard />
        </div>
        <div style={{ width: 350 }}>
          <ProductCard />
        </div>
        <div style={{ width: 350 }}>
          <ProductCard />
        </div>
        <div style={{ width: 350 }}>
          <ProductCard />
        </div>
        <div style={{ width: 350 }}>
          <ProductCard />
        </div>
        <div style={{ width: 350 }}>
          <ProductCard />
        </div>
      </Slider>
    </div>
  );
}