import { useContext, useState } from "react";
import Logo from "../../assets/img/logo.jpg";
import Button from "@mui/material/Button";
import CountryDropdown from "../CountryDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { FaHeart } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const context = useContext(MyContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setAnchorEl(null);
    localStorage.clear();
    context.setIsLogin(false);
  };

  return (
    <div className="header-wrapper">
      <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0 text-center  ">
            Due to the COVID 19 epidemic, orders may be processed with a slight
            delay
          </p>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logo-wrapper d-flex align-items-center col-sm-2">
              <a to={"/"}>
                {" "}
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </a>
            </div>

            <div className="col-sm-10 d-flex align-items-center part2">
              {context.countryList.length !== 0 && <CountryDropdown />}

              {/*Header search Start here */}
              <SearchBox />
              {/*Header search End here */}
              <div className="part3 d-flex align-items-center">
                {
                  context.isLogin !== true ? (
                    <Link to="/signIn">
                      <Button className="btn-blue btn-round mr-3">
                        Sign In
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Button className="circle " onClick={handleClick}>
                        <FaRegUser />{" "}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        id="acc-drop"
                        open={open}
                        onClose={handleClose}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <FaUser fontSize="small" />
                          </ListItemIcon>
                          My Account
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <FaClipboardCheck fontSize="small" />
                          </ListItemIcon>
                          Orders
                        </MenuItem>
                        <Link to={'/my-list'}>
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <FaHeart fontSize="small" />
                          </ListItemIcon>
                          My List
                        </MenuItem>
                        </Link>
                        <MenuItem onClick={logout}>
                          <ListItemIcon>
                            <RiLogoutCircleRFill fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </Menu>
                    </>
                  )

                  //  <Button className="circle "><FaRegUser /> </Button>
                }

                <div className="cart-tab d-flex aligh-items-center">
                  <span className="price">
                    Rs{" "}
                    {context.cartData?.cartList?.length !== 0 &&
                      context.cartData?.cartList
                        ?.map((item) => parseInt(item.price) * item.quantity)
                        .reduce((total, value) => total + value, 0)}
                  </span>
                  <div className="position-relative">
                    <Link to="/cart">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                    </Link>
                    <sapan className="count d-flex aligh-items-center justify-content-center">
                     {context.cartData?.cartList?.length}
                    </sapan>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Navigation />
    </div>
  );
};

export default Header;
