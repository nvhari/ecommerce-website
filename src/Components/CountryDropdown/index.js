import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";

const CountryDropdown = () => {
  const context = useContext(MyContext);
  const [isOpenModel, setisOpenModel] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);

  const selectCountry = (index,country) => {
    setSelectedTab(index);
    // setOpenModel(false)
    context.setSelectedCountry(country)
  };
  //search
  useEffect(() => {
    setCountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
        if(keyword!==''){
          const list = countryList.filter((item) => {
      return item.country.toLowerCase().includes(keyword);
   
    }); setCountryList(list);
        }else{
          setCountryList(context.countryList);
        }
  };

  return (
    <>
      <Button
        className="country-drop"
        onClick={() => {
          setisOpenModel(true);
        }}
      >
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <samp className="name">{context.selectCountry!==''? context.selectCountry.length>10 ? context.selectCountry.substr(0,10)+'...'  :context.selectCountry :'Select Location'}</samp>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog
        className="location-model"
        open={isOpenModel}
        onClose={() => {
          setisOpenModel(false);
        }}
      >
        <h4>Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button
          className="close_"
          onClick={() => {
            setisOpenModel(false);
            setCountryList(context.countryList);
          }}
        >
          <IoCloseOutline />
        </Button>
        <div className="header-search  w-100">
          <input
            type="text"
            placeholder="Search your area..."
            onChange={filterList}
          />
          <Button>
            <IoSearchOutline />
          </Button>
        </div>
        <ul className="country-list mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li  onClick={() => {
                  setisOpenModel(false);
                }} key={index}>
                  <Button
                  
                    onClick={() => selectCountry(index,item.country)}
                    className={`${selectedTab === index ? "active" : ``}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
