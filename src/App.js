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
 

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectCountry, setSelectedCountry] = useState("");
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
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route exact={true} path="/product/:id" element={<ProductDetails  />}></Route>
        </Routes>
        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
