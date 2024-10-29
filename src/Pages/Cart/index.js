import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  return (
    <>
      <section className="section cart-page">
        <div className="container">
          <h2 className="hd mb-2">Your Cart </h2>
          <p>
            Threre are <b>3</b> product in your cart
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
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cart-itemimg-wrapper">
                            <div className="image-wrapper">
                              <img
                                src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060706/1729060704565_hp-15-fc0154au-laptop-amd-ryzen-3-7320u-8gb-ddr5-5500-sdram-512gb-ssd-amd-radeon-graphics-windows-11-mso-fhd-39-6-cm-15-6-inch-natural-silver-1-59-kgs-1080p-web-cam-digital-o494352995-p608658148-0-20240402160.webp"
                                className="w-100"
                              />
                            </div>
                            <div className="info px-3">
                              <h6>File roast choo cheese creamy original</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size="small"
                              />
                            </div>
                          </div>
                          
                        </Link>
                      </td>
                      <td width="20%">5$</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="10%">7$</td>
                      <td width="10%">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cart-itemimg-wrapper">
                            <div className="image-wrapper">
                              <img
                                src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060706/1729060704565_hp-15-fc0154au-laptop-amd-ryzen-3-7320u-8gb-ddr5-5500-sdram-512gb-ssd-amd-radeon-graphics-windows-11-mso-fhd-39-6-cm-15-6-inch-natural-silver-1-59-kgs-1080p-web-cam-digital-o494352995-p608658148-0-20240402160.webp"
                                className="w-100"
                              />
                            </div>
                            <div className="info px-3">
                              <h6>File roast choo cheese creamy original</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size="small"
                              />
                            </div>
                          </div>
                          
                        </Link>
                      </td>
                      <td width="20%">5$</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="10%">7$</td>
                      <td width="10%">
                        <span className="remove">
                          <IoIosClose />
                        </span>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border p-3 cart-details">
                <h4>CART TOTALS</h4>
                <div className="d-flex align-items-center mb-3">
                  <span>Subtotal</span>
                  <span className="ml-auto text-success">$12.31</span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span>Shipping</span>
                  <span className="ml-auto ">
                    <b>Free</b>
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span>Subtotal</span>
                  <span className="ml-auto ">
                    <b>$12.31</b>
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span>Total</span>
                  <span className="ml-auto text-success">
                    <b>$12.31</b>
                  </span>
                </div>
                <br />
                <Button className="btn-blue btn-lg btn-big ">
                  <FaShoppingCart />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
