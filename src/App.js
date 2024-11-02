import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectCountry, setSelectedCountry] = useState("");
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };
  const values = {
    countryList,
    selectCountry,
    setSelectedCountry,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route
            exact={true}
            path="/product/:id"
            element={<ProductDetails />}
          ></Route>
          <Route exact={true} path="/cart" element={<Cart />}></Route>
          <Route exact={true} path="/signIn" element={<SignIn />}></Route>
          <Route exact={true} path="/signUp" element={<SignUp />}></Route>
        </Routes>
        {isHeaderFooterShow === true && <Footer />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
