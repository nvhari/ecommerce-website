import React from "react";
import { CgSpaceBetween } from "react-icons/cg";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    CgSpaceBetween: 5,
  };
  return (
    <div className="container mt-3">
      <div className="home-banner-section">
        <Slider {...settings}>
          <div className="item">
            <img
              src="https://cmsimages.shoppersstop.com/watches_main_banner_web_0e54cb446c/watches_main_banner_web_0e54cb446c.png "
              className="w-100"
            ></img>
          </div>
          <div className="item">
            <img
              src=" https://cmsimages.shoppersstop.com/mian_gift_of_love_web_0716d71fdf/mian_gift_of_love_web_0716d71fdf.png"
              className="w-100"
            ></img>
          </div>
          <div className="item">
            <img
              src="https://cmsimages.shoppersstop.com/Women_Western_Wear_main_banner_web_2537a4f27d/Women_Western_Wear_main_banner_web_2537a4f27d.png"
              className="w-100"
            ></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default HomeBanner;
