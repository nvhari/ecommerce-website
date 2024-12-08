import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import ProductItem from "../../../Components/Productitem";
import { Navigation } from "swiper/modules";
import { fetchdataFromApi } from "../../../utils/api";

function RelatedProducts(props) {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetchdataFromApi(`api/products`).then((res) => {
      console.log(res);
      setProductsData(res);
    });
  }, []);
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
    </>
  );
}

export default RelatedProducts;
