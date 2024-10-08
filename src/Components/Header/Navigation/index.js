import React from "react";
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
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 nav-part1">
            <Button className="allcat-tab">
              <span className="icon1 mr-2">
                <IoIosMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2 ml-2">
                <TfiAngleDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-9 nav-part2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <CiHome />
                  Home
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <PiPants />
                  fashion
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <GoLightBulb />
                  Electronic
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <GiFruitBowl />
                  Grocery
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <LiaBlogSolid />
                  Blog
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><LuContact />
                Contact </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
