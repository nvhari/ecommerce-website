import React, { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar";
import Button from "@mui/material/Button";
import { CiMenuBurger } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";

import { SlGrid } from "react-icons/sl";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../Components/Productitem";
import Pagination from "@mui/material/Pagination";
import { fetchdataFromApi } from "../../utils/api";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");
  const openDropDown = Boolean(anchorEl);
  const [productsData, setProductsData] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);


    //
    fetchdataFromApi(`api/products`).then((res) => {
      console.log(res);
      setProductsData(res);
    });
  }, []);
  return (
    <section className="product-listing-page">
      <div className="container">
        <div className="product-listing d-flex">
          <SideBar />

          <div className="content-right">
            <img
              src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428381/1731428380207_banner-7.jpg"
              className="w-100"
              style={{ borderRadius: "8px" }}
            />

            <div className="show-by mt-3 mb-3 d-flex align-items-center">
              <div className="d-flex btn-wrapper align-items-center">
                <Button
                  className={productView === "one" && "act"}
                  onClick={() => setProductView("one")}
                >
                  <CiMenuBurger />
                </Button>
                <Button
                  className={productView === "two" && "act"}
                  onClick={() => setProductView("two")}
                >
                  <SlGrid />
                </Button>
                <Button
                  className={productView === "three" && "act"}
                  onClick={() => setProductView("three")}
                >
                  <CgMenuGridR />
                </Button>
                <Button
                  className={productView === "four" && "act"}
                  onClick={() => setProductView("four")}
                >
                  <TfiLayoutGrid4 />
                </Button>
              </div>
              <div className="ml-auto show-by-filter">
                <Button onClick={handleClick}>
                  Show 9 <FaAngleDown />
                </Button>
                <Menu
                  className="w-100 showpage-dropdown"
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openDropDown}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>10</MenuItem>
                  <MenuItem onClick={handleClose}>20</MenuItem>
                  <MenuItem onClick={handleClose}>30</MenuItem>
                  <MenuItem onClick={handleClose}>40</MenuItem>
                </Menu>
              </div>
            </div>

            <div className="product-listing">
              {productsData?.length !== 0 &&
                productsData?.map((item, index) => {
                  return <ProductItem item={item} itemView={productView} />;
                })}
              {/* <ProductItem itemView={productView} /> */}
            </div>

            <div className="d-flex align-items-center justify-content-center mt-5">
              <Pagination count={10} color="primary" size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
