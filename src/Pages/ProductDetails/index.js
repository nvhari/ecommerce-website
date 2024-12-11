import React, { useContext, useEffect, useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import { fetchdataFromApi, postData } from "../../utils/api";
import { MyContext } from "../../App";

function ProductDetails() {
  const [activeSize, setActiveSize] = useState(null);
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const isActive = (index) => {
    setActiveSize(index);
  };

  let [cartFields, setCartFields] = useState({});
  let [peoductQuantity, setPeoductQuantity] = useState();

  const context = useContext(MyContext);
  //
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveSize(null);
    fetchdataFromApi(`api/products/${id}`).then((res) => {
      setProductData(res);
      console.log(res);
      console.log(productData);
    });
  }, []);
  //

  const quantity = (val) => {
    // alert(val);
    setPeoductQuantity(val);
  };

  const addtoCart = (data) => {
 
      if (activeSize !== null) {
        const user = JSON.parse(localStorage.getItem("user"));

        cartFields.productTitle = productData?.name;
        cartFields.image = productData?.images[0];
        cartFields.rating = productData?.rating;
        cartFields.price = productData?.price;
        cartFields.quantity = peoductQuantity;
        cartFields.subTotal = parseInt(productData?.price * peoductQuantity);
        cartFields.productId = productData?._id;
        cartFields.userId = user.userId;

        context.addToCart(cartFields);
      } else {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "Please select size",
        });
      }
  };

  const selectedItem = () => {};

  return (
    <>
      <section className="product-details section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductZoom
                images={productData?.images}
                discount={productData?.discount}
              />
            </div>
            <div className="col-md-8 pl-5 pr-5">
              <h2 className="hd text-capitalize">{productData?.name}</h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brands :</span>
                    <span>{productData?.brand} </span>
                  </div>
                </li>
                <li className="list-inline-item ml-4">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={parseInt(productData?.rating)}
                      readOnly
                      precision={0.5}
                      size="small"
                    />
                    <span className="text-light coursor ml-1">Review 1</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info mb-3">
                <span className="old-price">Rs {productData?.oldPrice}</span>
                <span className="net-price text-danger ml-2">
                  Rs {productData?.price}
                </span>
              </div>
              <span className="badge badge-success">IN STOCK</span>
              <p className="mt-3">{productData?.description}</p>

              {productData?.productSIZE?.length !== 0 && (
                <div className="product-size d-flex align-items-center  ">
                  <span>Size / Weight:</span>
                  <ul className="list list-inline mb-0 pl-4">
                    {productData?.productSIZE?.map((item, index) => {
                      return (
                        <li className="list-inline-item">
                          <a
                            className={`tag ${
                              activeSize === index ? "active" : ""
                            }`}
                            onClick={() => isActive(index)}
                          >
                            {item}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              <div className="d-flex align-items-center mt-3">
                <QuantityBox quantity={quantity} selectedItem={selectedItem} />
                <Button
                  className="btn-blue btn-lg btn-big btn-round"
                  onClick={() => addtoCart()}
                >
                  <IoCart /> &nbsp;
                  {context.addingInCart === true ? "Adding..." : " Add To Cart"}
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

          <RelatedProducts title="Related Product" />
          <RelatedProducts title="Recently viewed Product" />
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
