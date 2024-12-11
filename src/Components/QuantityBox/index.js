import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Button from "@mui/material/Button";

const QuantityBox = (props) => {
  const [inputVal, setinputVal] = useState(1);

   useEffect(()=>{
    if(props?.value!==undefined && props?.value!==null && props?.value!==""){
      setinputVal(parseInt(props?.value))
    }
   },[props.value])

  const minus = () => {
    if (inputVal !== 1) {
      setinputVal(inputVal - 1);
    }
  };
  const plus = () => {
    setinputVal(inputVal + 1);
  };

  //

  useEffect(() => {
    props.quantity(inputVal);
    props.selectedItem(props.item, inputVal);
    // console.log(props.item);
  }, [inputVal]);

  return (
    <div className="quantity-drop d-flex align-items-center justify-content-center">
      <Button onClick={minus}>
        <FaMinus />
      </Button>
      <input type="text" value={inputVal} />
      <Button onClick={plus}>
        <FaPlus />
      </Button>
    </div>
  );
};

export default QuantityBox;
