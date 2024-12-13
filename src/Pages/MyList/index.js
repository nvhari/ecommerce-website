import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MyContext } from "../../App";
import { deleteData, editData, fetchdataFromApi } from "../../utils/api";
import emptCart from "../../assets/img/checklist.png";

function MyList() {
  const [myListData, setMyListData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  let [cartFields, setCartFields] = useState({});

  const context = useContext(MyContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetchdataFromApi(`api/my-list?userId=${user?.userId}`).then((res) => {
      setMyListData(res);
    });
  }, []);

  //remove from cart
  const removeItem = (id) => {
    // setIsLoading(true)
    deleteData(`/api/my-list/${id}`).then((res) => {
      context.setAlertBox({
        open: true,
        error: false,
        msg: "Item removed from My list!",
      });
      const user = JSON.parse(localStorage.getItem("user"));
      fetchdataFromApi(`api/my-list?userId=${user?.userId}`).then((res) => {
        setMyListData(res);
      });
      //context.getCartdata();
    });
  };
  return (
    <>
      <section className="section cart-page">
        <div className="container">
          <h2 className="hd mb-2">Your My List </h2>
          <p>
            Threre are <b>{myListData?.myList?.length}</b> product in your cart
          </p>
          {console.log(myListData?.myList?.length)}
          {myListData?.myList?.length >= 0 ? (
            <div className="row">
              <div className="col-md-9 pr-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th width="35%">Product</th>
                        <th width="20%">Unit Price</th>

                        <th width="10%">Remove</th>
                      </tr>
                    </thead>

                    <tbody>
                      {console.log(myListData)}
                      {myListData?.myList?.length !== 0 &&
                        myListData?.myList?.map((item, index) => {
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
            </div>
          ) : (
            <div className="empty-container">
              <img src={emptCart} alt="Empty Cart" width="150" />
              <h3>My List is currently empty</h3>
              <br />
              <Link to="/">
                <button className="btn btn-blue">
                  <FaHome /> &nbsp; Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
      {isLoading === true && <div className="loading"></div>}
    </>
  );
}

export default MyList;
