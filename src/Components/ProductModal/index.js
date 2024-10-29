
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
          <ProductZoom/>
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
