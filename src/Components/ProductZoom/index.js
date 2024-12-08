import React, { useRef } from "react";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import { useEffect } from "react";
function ProductZoom(props) {
  const zoomSlider = useRef(null);
  const zoomSliderBig = useRef(null);
  const goto = (index) => {
    if (zoomSlider.current && zoomSliderBig.current) {
      zoomSlider.current.slickGoTo(index);
      zoomSliderBig.current.slickGoTo(index);
    }
  };

  useEffect(() => {
    // Ensure both refs are available before invoking goto
    if (zoomSlider.current && zoomSliderBig.current) {
      goto(0); // Initialize to the first slide if both sliders are ready
    }
  }, [zoomSlider.current, zoomSliderBig.current]);
  const Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    fade: false,
    arrows: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    // cssEase: "linear",
    infinite: true,};

  const Settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    fade: false,
    arrows: false,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    // cssEase: "linear",
    infinite: true,
  };
  return (
    <div className="product-zoom position-relative">
      <div className="badge badge-primary">{props.discount}%</div>
      <Slider {...Settings2} className="zoomSlider" ref={zoomSliderBig}>
        {props?.images?.map((item, index) => {
          return (
            <div className="item" key={index}>
              <InnerImageZoom zoomType="hover" zoomScale={1} src={item} />
            </div>
          );
        })}
      </Slider>

      <Slider {...Settings} className="zoomSlider" ref={zoomSlider}>
        {props?.images?.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img src={item} className="w-100" onClick={() => goto(index)} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductZoom;
