import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#f2fce4",
    "#feefea",
    "#ffceb",
    "#feefea",
    "#ecffec",
  ]);
  return (
    <section className="home-cat">
      <div className="container">
        <h3 className="mb-4 hd">Featured categories</h3>
        <Swiper
          slidesPerView={7}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          slidesPerGroup={3}
          modules={[Navigation]}
          className="mySwiper"
        >
          {itemBg?.map((item, index) => {
            return (
              <SwiperSlide>
                <div className="item text-center cursor" style={{ background: item }}>
                  <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" />
                  <p>Red apple</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
