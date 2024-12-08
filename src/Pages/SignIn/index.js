import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/img/logo.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import GoogleImg from "../../assets/img/GoogleSignInLight.png";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/api";
import { useState } from "react";

function SignIn() {
  const context = useContext(MyContext);
  const [isLoading, setIsloading] = useState(false);

  const history = useNavigate();

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  });
  //
  const [formfields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const onchangeInput = (e) => {
    setFormFields({
      ...formfields,
      [e.target.name]: e.target.value,
    });
  };


  const login = (e) => {
    e.preventDefault();

    console.log(formfields);
    if (formfields.email === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Email cannot be blank!",
      });
      return false;
    }

    if (formfields.password === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Password cannot be blank!",
      });
      return false;
    }
    setIsloading(true);
    postData("/api/user/signin", formfields)
      .then((res) => {
        try {
          if (res.error !== true) {
            const user = {
              name: res.user?.name,
              email: res.user?.email,
              userId: res.user?.id,
            };
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(user));

            context.setUser({
              name: res.user?.name,
              email: res.user?.email,
            });
            console.log(res);
            context.setAlertBox({
              open: true,
              error: false,
              msg: "User login successfully!",
            });
            setIsloading(false);
            // Navigate to dashboard after successful login
            setTimeout(() => {
              // history("/dashboard");
              window.location.href = "/";
            });
          } else {
            setIsloading(false);
            context.setAlertBox({
              open: true,
              error: true,
              msg: res.msg,
            });
          }
        } catch (error) {
          setIsloading(false);
          // Catch block for handling API errors
          console.log(error);
          context.setAlertBox({
            open: true,
            error: true,
            msg:
              error.response?.data?.message ||
              "An error occurred. Please try again.",
          });
        }
      })
      .catch((error) => {
        setIsloading(false);
        // This catch block will handle any errors from postData
        console.log(error);
        context.setAlertBox({
          open: true,
          error: true,
          msg:
            error.response?.data?.message || "An error occurred during login.",
        });
      });
  };

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

          <form className="mt-3" onSubmit={login}>
            <h2 className="mb-4">Sign In</h2>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                 
                variant="standard"
                className="w-100"
                name="email"
                  onChange={onchangeInput}
              />
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Password"
                type="password"
           
                variant="standard"
                className="w-100"
                name="password"
                  onChange={onchangeInput}
              />
            </div>

            <a className="border-effect  cursor txt">Forgot Password?</a>
            <div className="d-flex align-item-center mt-3 mb-3">
              <Button type="submit" className="btn-blue  col btn-lg btn-big">
              {isLoading === true ? <CircularProgress /> : "Sign In"}

              </Button>
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
