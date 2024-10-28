import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import QuantityBox from "../QuantityBox";
import { MdCompareArrows } from "react-icons/md";

const ProductModal = (props) => {
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
    <Dialog
      className="product-modal"
      open={true}
      onClose={() => props.CloseProductModal()}
    >
      <Button className="pd-close_" onClick={() => props.CloseProductModal()}>
        <MdClose />
      </Button>
      <h4 className="mb-2 font-weight-bold">
        All Natural Italian-Style Chicken Meatballs
      </h4>
      <div className="d-flex align-items-center ">
        <div className="d-flex align-items-center mr-4">
          <span>Brands:</span>
          <span className="ml-2">
            {" "}
            <b>Welch's</b>
          </span>
        </div>
        <Rating
          name="read-only"
          value={5}
          readOnly
          size="small"
          precision={0.5}
        />
      </div>
      <hr />
      <div className="row mt-2 product-detaile-modal">
        <div className="col-md-5">
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
        </div>
        <div className="col-md-7">
          <div className="d-flex info align-items-center mb-3">
            <span className="old-price lg mr-1">$9.5</span>
            <span className="net-price text-danger lg">$4.5</span>
          </div>
          <span
            className="badge  "
            style={{ background: "#e5f8ed ", color: " #16b858 " }}
          >
            IN STOCK
          </span>
          <p className="mt-3">
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
          </p>
          <div className="d-flex align-items-center">
            <QuantityBox />
            <Button className="btn-blue btn-lg btn-big btn-round ml-3 ">
              Add to Cart
            </Button>
          </div>
          <div className="d-flex align-items-center mt-5 actions">
            <Button className="btn-round btn-sml" variant="outlined">
              <CiHeart /> &nbsp; Add To Wishlist
            </Button>
            <Button className="btn-round btn-sml ml-3" variant="outlined">
              <MdCompareArrows />
              &nbsp; Compare
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
