import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { PiPants } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { GiFruitBowl } from "react-icons/gi";
import { LiaBlogSolid } from "react-icons/lia";
import { LuContact } from "react-icons/lu";

const Navigation = () => {
  const [isOpenNavbar, setisOpenNavbar]= useState(true)
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 nav-part1">
            <div className="car-wrapper">
              <Button className="allcat-tab" onClick={()=>{setisOpenNavbar(!isOpenNavbar)}}>
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <TfiAngleDown />
                </span>
              </Button>
              <div className={`side-navbar ${isOpenNavbar=== true ? 'open' :''}`} >
                <ul>
                  <li className="list-inline-item">
                    <Link to="/">
                      <Button>men </Button>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <Button>Women </Button>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <Button> beauty</Button>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <Button>kids</Button>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      {" "}
                      <Button>gift</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9 nav-part2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <CiHome />
                  <a>Home</a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <PiPants />
                  men
                </Link>
                <div className="submenu shadow">
                  <Link to="/">Clothing</Link>
                  <Link to="/">Footwear</Link>
                  <Link to="/">Watches</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <GoLightBulb />
                  Womwn
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <GiFruitBowl />
                  beauty
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <LiaBlogSolid />
                  watches
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">kids</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">gift</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <LuContact />
                  Contact{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
