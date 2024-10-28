import HomeBanner from "../../Components/HomeBanner";
import Button from "@mui/material/Button";
import { GoArrowRight } from "react-icons/go";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../Components/Productitem";
import HomeCat from "../../Components/HomeCat";
import Footer from "../../Components/Footer";

const Home = () => {
  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="home-products">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img
                    className="cursor w-100"
                    src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729058293/1729058292132_New_Project_34.jpg"
                  ></img>
                </div>
                <div className="banner mt-3">
                  <img
                    className="cursor w-100"
                    src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729058303/1729058302157_New_Project_35.jpg"
                  ></img>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="d-flex align-item-center">
                <div className="info ">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March
                  </p>
                </div>
                <Button className="view-allbtn " style={{ outline: "none" }}>
                  View All <GoArrowRight />
                </Button>
              </div>
              <div className="product_row mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={1}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-item-center mt-5">
                <div className="info ">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March
                  </p>
                </div>
                <Button className="view-allbtn " style={{ outline: "none" }}>
                  View All <GoArrowRight />
                </Button>
              </div>
              <div className="product_row mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={1}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="d-flex mt-4 mb-5 banner-sec">
                <div className="banner ">
                  <img src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729520206/1729520205930_banner-7.jpg" />
                </div>
                <div className="banner ">
                  <img src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729520206/1729520205930_banner-7.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-letter-sec mt-3 mb-3 ">
        <div className="container   ">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-white mb-1">
                {" "}
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter to get...</h3>
              <p className="text-light">
                join our email subdcription now to get updates on
                <br /> promotions and coupens.
              </p>
            </div>
            <div className="col-md-6">
              <img src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
