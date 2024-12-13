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
import ProductModal from "./Components/ProductModal";
import { fetchdataFromApi, postData } from "./utils/api";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import MyList from "./Pages/MyList";
import CheckOut from "./Pages/CheckOut";
const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectCountry, setSelectedCountry] = useState("");
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [productData, setProductData] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [cartData, setCartData] = useState();
  const [addingInCart, setAddingInCart] = useState(false);
  let [cartFields, setCartFields] = useState({});

  const [user, setUser] = useState({
    name: "",
    email: "",
    userId: "",
  });
  const [isOpenProductModal, setisOpenProductModal] = useState({
    id: "id",
    open: false,
  });
  //
  const [alertBox, setAlertBox] = useState({
    msg: "",
    error: false,
    open: false,
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertBox({
      open: false,
      msg: "",
    });
  };
  //
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null && token !== "" && token !== undefined) {
      setIsLogin(true);

      //user data
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
    //cart count
    fetchdataFromApi(`api/cart`).then((res) => {
      setCartData(res);
    });
  }, []);

  const getCartdata = () => {
    fetchdataFromApi(`api/cart`).then((res) => {
      setCartData(res);
    });
  };
  //cart count end

  //
  useEffect(() => {
    // alert(isOpenProductModal.id)
    isOpenProductModal.open === true &&
      fetchdataFromApi(`api/products/${isOpenProductModal.id}`).then((res) => {
        setProductData(res);
      });
  }, [isOpenProductModal]);
  //

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };
  const CloseProductModal = () => {
    setisOpenProductModal(false);
  };

  //add to cart fn
  const addToCart = (data) => {
    console.log(data);
    setAddingInCart(true);
    postData(`/api/cart/add`, data).then((res) => {
      if (res.status !== false) {
        setAlertBox({
          open: true,
          error: false,
          msg: "Item is added in the cart",
        });
        setTimeout(() => {
          setAddingInCart(false);
        }, 1000);
        getCartdata();
      } else {
        setAlertBox({
          open: true,
          error: true,
          msg: res.msg,
        });
        setAddingInCart(false);
      }
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
    isOpenProductModal,
    setisOpenProductModal,
    alertBox,
    setAlertBox,
    user,
    setUser,
    addToCart,

    addingInCart,
    setAddingInCart,
    cartFields,
    setCartFields,
    cartData,
    setCartData,
    getCartdata,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Snackbar
          open={alertBox.open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={alertBox.error === false ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {alertBox.msg}
          </Alert>
        </Snackbar>
        {isHeaderFooterShow === true && <Header />}
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          {/* <Route path="/cat/:id" exact={true} element={<Listing />} /> */}

          <Route path="/shop" exact={true} element={<Listing />} />
          <Route
            path="/products/:id"
            exact={true}
            element={<ProductDetails />}
          ></Route>
          <Route exact={true} path="/cart" element={<Cart />}></Route>
          <Route exact={true} path="/signIn" element={<SignIn />}></Route>
          <Route exact={true} path="/signUp" element={<SignUp />}></Route>
          <Route exact={true} path="/my-list" element={<MyList />}></Route>
          <Route exact={true} path="/checkout" element={<CheckOut />}></Route>
        </Routes>
        {isHeaderFooterShow === true && <Footer />}
        {isOpenProductModal.open == true && (
          <ProductModal
            data={productData}
            CloseProductModal={CloseProductModal}
          />
        )}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
