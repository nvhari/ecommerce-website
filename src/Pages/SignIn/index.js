import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/img/logo.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import GoogleImg from "../../assets/img/GoogleSignInLight.png";

function SignIn() {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  });
  return (
    <section className="section signin-page">
      <div className="shape-buttom">
        <svg
          fill="#fff"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1921 819.8"
          style={{ enablebackground: "new 0 0 1921 819.8" }}
        >
          <path
            class="st0"
            d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="text-center">
            <img src={Logo} alt="Logo" />
          </div>

          <form className="mt-3">
            <h2 className="mb-4">Sign In</h2>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                required
                variant="standard"
                className="w-100"
              />
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Password"
                type="password"
                required
                variant="standard"
                className="w-100"
              />
            </div>

            <a className="border-effect  cursor txt">Forgot Password?</a>
            <div className="d-flex align-item-center mt-3 mb-3">
              <Button className="btn-blue  col btn-lg btn-big">Sign In</Button>
              <Link to="/">
                {" "}
                <Button
                  className="col btn-lg btn-big ml-3"
                  variant="outlined"
                  onClick={() => {
                    context.setIsHeaderFooterShow(true);
                  }}
                >
                  Cancel
                </Button>
              </Link>
            </div>
            <p className="txt ">
              Note Registered?
              <Link to="/signUp" className="border-effect cursor ml-2">
                Sign Up
              </Link>
            </p>
            <h6 className="mt-4 text-center font-weight-bold">
              Or continue with social account
            </h6>

            <Button className="login-with-google mt-2" variant="outlined">
              <img src={GoogleImg}></img>
              Sign In With Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
