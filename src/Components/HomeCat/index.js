import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const HomeCat = (props) => {
  // const [itemBg, setItemBg] = useState([
  //   "#fffceb",
  //   "#ecffec",
  //   "#feefea",
  //   "#fff3ff",
  //   "#f2fce4",
  //   "#feefea",
  //   "#fffceb",
  //   "#feefea",
  //   "#ecffec",
  //   "#feefea",
  //   "#fff3eb",
  //   "#f2fce4",
  //   "#feefea",
  //   "#ffceb",
  //   "#feefea",
  //   "#ecffec",
  // ]);
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
          {/* {console.log(props.catData)} */}
          {props.catData?.categoryList?.length !== 0 &&
            props.catData?.categoryList?.map((cat, index) => {
              return (
                <SwiperSlide>
                  <div
                    className="item text-center cursor"
                    style={{ background: cat.color }}
                  >
                    <img src={cat.images[0]} />
                    <p>{cat.name}</p>
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
