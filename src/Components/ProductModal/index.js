import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";

import { CiHeart } from "react-icons/ci";
import QuantityBox from "../QuantityBox";
import { MdCompareArrows } from "react-icons/md";
import ProductZoom from "../ProductZoom";

const ProductModal = (props) => {
  return (
    <Dialog
      className="product-modal"
      open={true}
      onClose={() => props.CloseProductModal()}
    >
      <Button className="pd-close_" onClick={() => props.CloseProductModal()}>
        <MdClose />
      </Button>
      <h4 className="mb-2 font-weight-bold">{props?.data?.name}</h4>
      <div className="d-flex align-items-center ">
        <div className="d-flex align-items-center mr-4">
          <span>Brands:</span>
          <span className="ml-2">
            {" "}
            <b>{props?.data?.brand}</b>
          </span>
        </div>
        <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={parseInt(props?.data?.rating)}
          readOnly
          size="small"
        />
      </div>
      <hr />
      <div className="row mt-2 product-detaile-modal">
        <div className="col-md-5">
          <ProductZoom
            images={props?.data?.images}
            discount={props?.data?.discount}
          />
        </div>
        <div className="col-md-7">
          <div className="d-flex info align-items-center mb-3">
            <span className="old-price lg mr-1">
              Rs.{props?.data?.oldPrice}
            </span>
            <span className="net-price text-danger lg">
              Rs.{props?.data?.price}
            </span>
          </div>
          <span
            className="badge  "
            style={{ background: "#e5f8ed ", color: " #16b858 " }}
          >
            IN STOCK
          </span>
          <p className="mt-3">{props?.data?.description}</p>
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
