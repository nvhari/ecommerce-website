import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";
import { MyContext } from "../../App";
import { fetchdataFromApi, postData } from "../../utils/api";
import { color } from "@mui/system";
import { useNavigate } from "react-router-dom"; 

 
function CheckOut() {

  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  const [formFields, setFormFields] = useState({
    fullName: "",
    country: "",
    streetAddressLine1: "",
    streetAddressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  });
  const history = useNavigate()
  const context = useContext(MyContext);

  useEffect(() => {
    // fetchdataFromApi(`api/cart`).then((res) => {
    //   setCartData(res);
    // });
    const user = JSON.parse(localStorage.getItem("user"));
    fetchdataFromApi(`api/cart?userId=${user?.userId}`).then((res) => {
      setCartData(res);
    });
  }, []);

  const onChangeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const checkout = (e) => {
    e.preventDefault();

    const totalAmount = cartData?.cartList?.length
      ? cartData.cartList
          .map((item) => parseInt(item.price) * item.quantity)
          .reduce((total, value) => total + value, 0) * 100 // Convert to paise
      : 0;
    //
    console.log(formFields);
    if (formFields.fullName === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please fill name",
      });
      return false;
    }
    if (formFields.country === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please select your country",
      });
      return false;
    }
    if (formFields.streetAddressLine1 === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please provide your street address",
      });
      return false;
    }

    if (formFields.city === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please fill in your city",
      });
      return false;
    }
    if (formFields.state === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please fill in your state",
      });
      return false;
    }
    if (formFields.zipCode === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please provide a valid postal/zip code",
      });
      return false;
    }
    if (
      formFields.phoneNumber === "" ||
      !/^\d{10}$/.test(formFields.phoneNumber)
    ) {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please provide a valid 10-digit phone number",
      });
      return false;
    }
    if (formFields.email === "" || !/^\S+@\S+\.\S+$/.test(formFields.email)) {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please provide a valid email address",
      });
      return false;
    }

    const addressInfo = {
      name: formFields.fullName,
      phoneNumber: formFields.phoneNumber,
      address: formFields.streetAddressLine1 + formFields.streetAddressLine2,
      pincode: formFields.zipCode,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      key_secret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
      amount: totalAmount,
      currency: "INR",
      order_receipt: "order_rcptid_" + formFields.fullName,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);
        const paymentId = response.razorpay_payment_id;
        const user = JSON.parse(localStorage.getItem("user"));
        const payLoad = {
          name: addressInfo.name,
          phoneNumber: formFields.phoneNumber,
          address:
            formFields.streetAddressLine1 + formFields.streetAddressLine2,
          pincode: addressInfo.pincode,
          amount: totalAmount  / 100,
          paymentId: paymentId,
          email: user.email,
          userId: user.userId,
          products: cartData,
        };
        console.log(payLoad);
        postData(`/api/orders/create`,payLoad).then(res=>{
          history("/")
        })
      },
      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <section className="section">
      <div className="container">
        <form className="checkoutform" onSubmit={checkout}>
          <div className="row">
            <div className="col-md-8">
              <h2 className="hd">BILLING DETAILS</h2>
              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="fullName"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Country"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="country"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Street address</h6>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="House number and street name"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="streetAddressLine1"
                      onChange={onChangeInput}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Apartment, suite, unit, ect. (optional)"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="streetAddressLine2"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Town / City</h6>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Town / City"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="city"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>
              <h6>State</h6>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="State"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="state"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Postelcode / zip</h6>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Postelcode or zip"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="zipCode"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="phoneNumber"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="email"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* // */}
            <div className="col-md-4">
              <div className="card order-info">
                <h4 className="hd">YOUR ORDER</h4>
                <div className="table-responsive mt-4">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData?.cartList?.length !== 0 &&
                        cartData?.cartList?.map((item, index) => {
                          return (
                            <tr>
                              <td>
                                {item?.productTitle?.substr(0, 20) + "..."}
                                <b>&nbsp; x {item?.quantity}</b>
                              </td>
                              <td> &#8377; {item?.subTotal}</td>
                            </tr>
                          );
                        })}
                      <tr>
                        <td>Subtotal</td>
                        <td>
                          &#8377;
                          {cartData?.cartList?.length !== 0 &&
                            cartData?.cartList
                              ?.map(
                                (item) => parseInt(item.price) * item.quantity
                              )
                              .reduce((total, value) => total + value, 0)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Button type="submit" className="btn-blue btn-lg btn-big ">
                  <IoBagCheckOutline />
                  &nbsp; Checkout
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CheckOut;
