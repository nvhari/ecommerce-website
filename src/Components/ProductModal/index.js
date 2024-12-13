import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { IoCart } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import QuantityBox from "../QuantityBox";
import { MdCompareArrows } from "react-icons/md";
import ProductZoom from "../ProductZoom";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../App";
import { postData } from "../../utils/api";

const ProductModal = (props) => {
  const [productQuantity, setProductQuantity] = useState(1);  // Default to 1
  const [activeSize, setActiveSize] = useState(null);
  const [productData, setProductData] = useState(props?.data || {});
  const context = useContext(MyContext);

  const isActive = (index) => setActiveSize(index);

  useEffect(() => {
    setProductData(props?.data);
  }, [props?.data]);

  const quantity = (val) => setProductQuantity(val);

  const addtoCart = () => {
    if (activeSize !== null) {
      const user = JSON.parse(localStorage.getItem("user"));

      const cartFields = {
        productTitle: productData?.name,
        image: productData?.images[0],
        rating: productData?.rating,
        price: productData?.price,
        quantity: productQuantity,
        subTotal: productData?.price * productQuantity,
        productId: productData?._id,
        userId: user?.userId,
      };

      // Ensure context.addToCart exists before using it
      if (context?.addToCart) {
        context.addToCart(cartFields);
      } else {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "Unable to add to cart. Try again later.",
        });
      }
    } else {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please select size",
      });
    }
  };

  const addToMyList = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const data = {
        productTitle: productData?.name,
        image: productData?.images[0],
        rating: productData?.rating,
        productId: id,
        price: productData?.price,
        userId: user?.userId,
      };

      postData(`/api/my-list/add/`, data).then((res) => {
        context.setAlertBox({
          open: true,
          error: !res.status,
          msg: res.status ? "Product added to wishlist" : res.msg,
        });
      });
    } else {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please login to continue",
      });
    }
  };

  return (
    <Dialog className="product-modal" open={true} onClose={() => props.CloseProductModal()}>
      <Button className="pd-close_" onClick={() => props.CloseProductModal()}>
        <MdClose />
      </Button>
      <h4 className="mb-2 font-weight-bold">{productData?.name}</h4>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center mr-4">
          <span>Brand:</span>
          <span className="ml-2"><b>{productData?.brand}</b></span>
        </div>
        <Rating className="mt-2 mb-2" name="read-only" value={productData?.rating || 0} readOnly size="small" />
      </div>
      <hr />
      <div className="row mt-2 product-detaile-modal">
        <div className="col-md-5">
          <ProductZoom images={productData?.images} discount={productData?.discount} />
        </div>
        <div className="col-md-7">
          <div className="d-flex info align-items-center mb-3">
            <span className="old-price lg mr-1">Rs.{productData?.oldPrice}</span>
            <span className="net-price text-danger lg">Rs.{productData?.price}</span>
          </div>
          <span className="badge" style={{ background: "#e5f8ed", color: "#16b858" }}>
            IN STOCK
          </span>
          <p className="mt-3">{productData?.description}</p>
          {productData?.productSIZE?.length > 0 && (
            <div className="product-size d-flex align-items-center">
              <span>Size / Weight:</span>
              <ul className="list list-inline mb-0 pl-4">
                {productData.productSIZE.map((item, index) => (
                  <li className="list-inline-item" key={index}>
                    <a className={`tag ${activeSize === index ? "active" : ""}`} onClick={() => isActive(index)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="d-flex align-items-center">
            <QuantityBox quantity={quantity} selectedItem={() => {}} />
            <Button className="btn-blue btn-lg btn-big btn-round" onClick={addtoCart}>
              <IoCart /> &nbsp; {context.addingInCart ? "Adding..." : "Add To Cart"}
            </Button>
          </div>
          <div className="d-flex align-items-center mt-5 actions">
            <Button className="btn-round btn-sml" variant="outlined" onClick={() => addToMyList(productData?._id)}>
              <CiHeart /> &nbsp; Add To Wishlist
            </Button>
            <Button className="btn-round btn-sml ml-3" variant="outlined">
              <MdCompareArrows /> &nbsp; Compare
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
