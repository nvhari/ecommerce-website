import React, { useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";

function ProductDetails() {
  const [activeSize, setActiveSize] = useState(null);
  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="product-details section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductZoom />
            </div>
            <div className="col-md-8 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                All Natural Chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brands :</span>
                    <span>Welch's </span>
                  </div>
                </li>
                <li className="list-inline-item ml-4">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      precision={0.5}
                      size="small"
                    />
                    <span className="text-light coursor ml-1">Review 1</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info mb-3">
                <span className="old-price">$20.00</span>
                <span className="net-price text-danger ml-2">$15.00</span>
              </div>
              <span className="badge badge-success">IN STOCK</span>
              <p className="mt-3">
                Rs: Rs: Kurta: The kurta is the top piece, which is a long
                tunic-style garment that can vary in length, sleeve style, and
                neckline. In this set, it is made from rayon fabric, which is
                known for its softness, smooth texture, and breathability. Rayon
                kurta often comes in a variety of prints, patterns, and colors,
                catering to different tastes and occasio.
              </p>
              <div className="product-size d-flex align-items-center  ">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      100g
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round">
                  <IoCart /> &nbsp; Add To Cart
                </Button>
                <Tooltip title="Add to wishlist" placement="bottom">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                    <FaRegHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to compare" placement="bottom">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                    <MdCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <RelatedProducts title="Related Product"/>
          <RelatedProducts title="Recently viewed Product"/>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
