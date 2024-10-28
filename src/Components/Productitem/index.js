import React, { useState } from "react";
import Button from "@mui/material/Button";
import { SlSizeFullscreen } from "react-icons/sl";
import Rating from "@mui/material/Rating";
import { FaRegHeart } from "react-icons/fa6";
import ProductModal from "../ProductModal";

function ProductItem() {
  const [isOpenProductModal, setisOpenProductModal] = useState(false);

  const viewProductDetails = (id) => {
    setisOpenProductModal(true);
  };
    const CloseProductModal =()=>{
      setisOpenProductModal(false);
    } 
   
  return (
    <>
      <div className="item product-item">
        <div className="img-wrapper">
          <img
            src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729065296/1729065290584_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-1-202201130044.jpg"
            className="w-100"
          />
          <span className="badge badge-primary">28%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <SlSizeFullscreen />
            </Button>
            <Button>
              <FaRegHeart />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>Werther original candies</h4>
          <sapan className="text-success d-block">In stock</sapan>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
          />
          <div className="d-flex">
            <span className="old-price">$20.00</span>
            <span className="net-price text-danger">$15.00</span>
          </div>
        </div>
      </div>

      {isOpenProductModal == true && <ProductModal CloseProductModal={CloseProductModal} />}
    </>
  );
}

export default ProductItem;
