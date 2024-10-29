import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import ProductItem from "../../../Components/Productitem";
import { Navigation } from "swiper/modules";

function RelatedProducts(props) {
  return (
    <>
      <div className="d-flex align-item-center mt-5 mb-3">
        <div className="info ">
          <h3 className="mb-0 hd">{props.title}</h3>
          <p className="text-light text-sml mb-0">
            Do not miss the current offers until the end of March
          </p>
        </div>
      </div>
      <div className="product_row w-100 mt-0">
        <Swiper
          slidesPerView={5}
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
    </>
  );
}

export default RelatedProducts;
