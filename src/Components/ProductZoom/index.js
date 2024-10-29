import React, { useRef } from "react";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import { useEffect } from "react";
function ProductZoom() {
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
  };

  const Settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    fade: false,
    arrows: false,
  };
  return (
  
      <div className="product-zoom position-relative">
        <div className="badge badge-primary">23%</div>
        <Slider {...Settings2} className="zoomSlider" ref={zoomSliderBig}>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={`https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729059900/1729059896376_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-0-202408030114.webp`}
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={`https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729059900/1729059896376_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-0-202408030114.webp`}
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={`https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729059900/1729059896376_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-0-202408030114.webp`}
            />
          </div>
        </Slider>

        <Slider {...Settings} className="zoomSlider" ref={zoomSlider}>
          <div className="item">
            <img
              src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729059902/1729059896441_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-1-202408030114.jpg"
              className="w-100"
              onClick={() => goto(0)}
            />
          </div>
          <div className="item">
            <img
              src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729059904/1729059896503_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-2-202408030114.webp"
              className="w-100"
              onClick={() => goto(1)}
            />
          </div>
          <div className="item">
            <img
              src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729059902/1729059896441_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-1-202408030114.jpg"
              className="w-100"
              onClick={() => goto(2)}
            />
          </div>
        </Slider>
      </div>
 
  );
}

export default ProductZoom;
