import React from "react";
import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-info row">
          <div className="col d-flex align-item-center">
            <span>
              <LuShirt />
            </span>
            <span className="ml-2"> Everyday fresh products</span>
          </div>
          <div className="col d-flex align-item-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2">Free delivery for order over $70</span>
          </div>
          <div className="col d-flex align-item-center">
            <span>
              <RiDiscountPercentLine />
            </span>
            <span className="ml-2"> Daily mega Discounts</span>
          </div>
          <div className="col d-flex align-item-center">
            <span>
              <CiBadgeDollar />
            </span>
            <span className="ml-2"> Best price on the market</span>
          </div>
        </div>

        <div className="row mt-5 links-wrap">
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#"> Fresh vegetables</Link>
              </li>
              <li>
                <Link to="#"> Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#"> Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#"> Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#"> Party Trays</Link>
              </li>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#"> Fresh vegetables</Link>
              </li>
              <li>
                <Link to="#"> Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#"> Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#"> Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#"> Party Trays</Link>
              </li>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#"> Fresh vegetables</Link>
              </li>
              <li>
                <Link to="#"> Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#"> Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#"> Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#"> Party Trays</Link>
              </li>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#"> Fresh vegetables</Link>
              </li>
              <li>
                <Link to="#"> Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#"> Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#"> Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#"> Party Trays</Link>
              </li>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#"> Fresh vegetables</Link>
              </li>
              <li>
                <Link to="#"> Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#"> Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#"> Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#"> Party Trays</Link>
              </li>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#"> Fresh vegetables</Link>
              </li>
              <li>
                <Link to="#"> Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#"> Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#"> Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to="#"> Party Trays</Link>
              </li>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="compyright mt-3 pt3 pb-3 d-flex mt-5">
          <p className="mb-0">
            compyright 2024 teknowfeed. All rights reserved
          </p>
          <ul className="list list-inline ml-auto mb-0">
            <li className="list-inline-item">
              <Link to="#">
                <FaFacebook />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaSquareXTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
