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
 
 


const Header = () => {

const context = useContext(MyContext);

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
                <img src={Logo} alt="Logo" />
              </a>
            </div>

            <div className="col-sm-10 d-flex align-items-center part2">
             
             {
              context.countryList.length!==0 &&  <CountryDropdown />
             }

          
              {/*Header search Start here */}
              <SearchBox />
              {/*Header search End here */}
              <div className="part3 d-flex align-items-center   ">
                <Button className="circle mr-5">
                  <FaRegUser />
                </Button>
                <div className="cart-tab d-flex aligh-items-center">
                  <span className="price">$3.29</span>
                  <div className="position-relative">
                    <Button className="circle">
                      <IoBagOutline />
                    </Button>
                    <sapan className="count d-flex aligh-items-center justify-content-center">1</sapan>
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
