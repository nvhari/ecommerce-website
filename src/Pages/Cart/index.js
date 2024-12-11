import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";

import { MyContext } from "../../App";
import { deleteData, editData, fetchdataFromApi } from "../../utils/api";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [peoductQuantity, setPeoductQuantity] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let [cartFields, setCartFields] = useState({});

  const [changeQuantity, setChangeQuantity] = useState(0);

  const context = useContext(MyContext);

  const quantity = (val) => {
    // alert(val);
    setPeoductQuantity(val);
    setChangeQuantity(val);
  };
  useEffect(() => {
    fetchdataFromApi(`api/cart`).then((res) => {
      setCartData(res);
      
    });
  }, []);

  const selectedItem = (item, quantityval) => {
    if (changeQuantity !== 0) {
      setIsLoading(true);
      console.log(item);
      const user = JSON.parse(localStorage.getItem("user"));

      cartFields.productTitle = item?.productTitle;
      cartFields.image = item?.image;
      cartFields.rating = item?.rating;
      cartFields.price = item?.price;
      cartFields.quantity = quantityval;
      cartFields.subTotal = parseInt(item?.price * quantityval);
      cartFields.productId = item?._id;
      cartFields.userId = user.userId;
      console.log(cartFields);

      // console.log(typeof user.userId);
      editData(`/api/cart/${item?._id}`, cartFields).then((res) => {
        setTimeout(() => {
          setIsLoading(false);
          fetchdataFromApi(`api/cart`).then((res) => {
            setCartData(res);
          });
        }, 1000);
      });
    }
  };

  //remove from cart
  const removeItem = (id) => {
    deleteData(`/api/cart/${id}`).then((res) => {
      context.setAlertBox({
        open: true,
        error: false,
        msg: "Item removed from cart!",
      });
      fetchdataFromApi(`api/cart`).then((res) => {
        setCartData(res);
      });
      context.getCartdata()
    });
  };
  return (
    <>
      <section className="section cart-page">
        <div className="container">
          <h2 className="hd mb-2">Your Cart </h2>
          <p>
            Threre are <b>{cartData?.cartList?.length}</b> product in your cart
          </p>
          <div className="row">
            <div className="col-md-9 pr-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="35%">Product</th>
                      <th width="20%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="10%">Subtotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartData?.cartList?.length !== 0 &&
                      cartData?.cartList?.map((item, index) => {
                        return (
                          <tr>
                            <td width="35%">
                              <Link to={`/products/${item?.productId}`}>
                                <div className="d-flex align-items-center cart-itemimg-wrapper">
                                  <div className="image-wrapper">
                                    <img
                                      src={item?.image}
                                      className="w-100"
                                      alt={item?.productTitle}
                                    />
                                  </div>
                                  <div className="info px-3">
                                    <h6>
                                      {item?.productTitle?.substr(0, 30) +
                                        "..."}
                                    </h6>
                                    <Rating
                                      name="read-only"
                                      value={parseInt(item?.rating)}
                                      readOnly
                                      size="small"
                                    />
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td width="20%">Rs {item?.price}</td>
                            <td width="25%">
                              <QuantityBox
                                quantity={quantity}
                                item={item}
                                selectedItem={selectedItem}
                                value={item?.quantity}
                              />
                            </td>
                            <td width="10%">Rs {item?.subTotal}</td>
                            <td width="10%">
                              <span
                                className="remove"
                                onClick={() => removeItem(item?._id)}
                              >
                                <IoIosClose />
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            {/* {console.log(cartData)} */}
            <div className="col-md-3">
              <div className="card border p-3 cart-details">
                <h4>CART TOTALS</h4>
                <div className="d-flex align-items-center mb-3">
                  <span>Subtotal</span>
                  <span className="ml-auto text-success">
                    Rs
                    {cartData?.cartList?.length !== 0 &&
                      cartData?.cartList
                        ?.map((item) => parseInt(item.price) * item.quantity)
                        .reduce((total, value) => total + value, 0)}
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span>Shipping</span>
                  <span className="ml-auto ">
                    <b>Free</b>
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span>Estimate for</span>
                  <span className="ml-auto ">
                    <b>USA</b>
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span>Total</span>
                  <span className="ml-auto text-success">
                    <b>
                      Rs{" "}
                      {cartData?.cartList?.length !== 0 &&
                        cartData?.cartList
                          ?.map((item) => parseInt(item.price) * item.quantity)
                          .reduce((total, value) => total + value, 0)}
                    </b>
                  </span>
                </div>
                <br />
                <Button className="btn-blue btn-lg btn-big ">
                  <IoBagCheckOutline />&nbsp;
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLoading === true && <div className="loading"></div>}
    </>
  );
}

export default Cart;
