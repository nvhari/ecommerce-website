import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { SlSizeFullscreen } from "react-icons/sl";
import Rating from "@mui/material/Rating";
import { FaRegHeart } from "react-icons/fa6";
import ProductModal from "../ProductModal";
import Slider from "react-slick";
import { MyContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

function ProductItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef();

  const context = useContext(MyContext);

  var settings = {
    dots: true,
    infinite: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  //
  const history = useNavigate();
  const viewProductDetails = (id) => {
    context.setisOpenProductModal({
      id: id,
      open: true,
    });
  };


  
  useEffect(() => {
    // history(`item product-item ${props.itemView}`)
    
   
    console.log(props.item);
  }, []);
  return (
    <>
      <div className={`item product-item ${props.itemView}`}>
        <div className="img-wrapper">
          <Link to={`products/${props.item?._id}`}>
            {isHovered === true ? (
              <Slider {...settings} ref={sliderRef}>
                {props.item?.images?.map((image, index) => {
                  return (
                    <div className="" key={index}>
                      <img src={image} className="w-100"></img>
                    </div>
                  );
                })}
              </Slider>
            ) : (
              <img src={props.item?.images[0]} className="w-100" />
            )}
          </Link>
          <span className="badge badge-primary">{props.item?.discount}%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(props.item?._id)}>
              <SlSizeFullscreen />
            </Button>
            <Button>
              <FaRegHeart />
            </Button>
          </div>
        </div>
        <di className="info">
          <h4>{props?.item?.name?.substr(0, 22) + "..."}</h4>
          <sapan className="text-success d-block">In stock</sapan>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={parseInt(props.item?.rating)}
            readOnly
            size="small"
          />
          <div className="d-flex">
            <span className="old-price">Rs {props.item?.oldPrice}</span>
            <span className="net-price text-danger">
              Rs {props.item?.price}
            </span>
          </div>
        </di>
      </div>
    </>
  );
}

export default ProductItem;
