import HomeBanner from "../../Components/HomeBanner";
import Button from "@mui/material/Button";
import { GoArrowRight } from "react-icons/go";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../Components/Productitem";
import HomeCat from "../../Components/HomeCat";
import Footer from "../../Components/Footer";
import { fetchdataFromApi } from "../../utils/api";

const Home = () => {
  const [catData, setCatData] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    
    fetchdataFromApi("api/categories").then((res) => {
      setCatData(res);
    });

    const filterkey = "isFeatured";
    fetchdataFromApi(`api/products/featured`).then((res) => {
      setFeaturedProducts(res);
    });

    fetchdataFromApi(`api/products`).then((res) => {
      console.log(res);
      setProductsData(res);
    });
  }, []);

  return (
    <>
      <HomeBanner />
      {catData?.length !== 0 && <HomeCat catData={catData} />}

      <section className="home-products">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img
                    className="cursor w-100"
                    src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428306/1731428304529_New_Project_34.jpg"
                  ></img>
                </div>
                <div className="banner mt-3">
                  <img
                    className="cursor w-100"
                    src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428345/1731428343183_New_Project_35.jpg"
                  ></img>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="d-flex align-item-center">
                <div className="info ">
                  <h3 className="mb-0 hd">FEATURED PRODUCTS</h3>
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
                  {featuredProducts?.length !== 0 &&
                    featuredProducts?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <ProductItem item={item} />
                        </SwiperSlide>
                      );
                    })}
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
                  {productsData?.length !== 0 &&
                    productsData?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <ProductItem item={item} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
              <div className="product_row mt-4 d-flex torow">
                {productsData?.length !== 0 &&
                  productsData?.map((item, index) => {
                    return <ProductItem item={item} />;
                  })}
              </div>

              <div className="d-flex mt-4 mb-5 banner-sec">
                <div className="banner ">
                  <img src=" https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428239/1731428237761_New_Project_3.jpg" />
                </div>
                <div className="banner ">
                  <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428252/1731428250193_New_Project_2.jpg" />
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
