import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/img/logo.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoogleImg from "../../assets/img/GoogleSignInLight.png";
import { useState } from "react";
import { postData } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";



function SignUp() {
  const context = useContext(MyContext);
  const history = useNavigate();

  const [isLoading, setIsloading] = useState(false);
  const [formfields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: false,
  });

  //
  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  });

  const onchangeInput = (e) => {
    setFormFields(() => ({
      ...formfields,
      [e.target.name]: e.target.value,
    }));
  };

  const register = (e) => {
    e.preventDefault();
    console.log(formfields);
    try {
      // Field validations
      if (formfields.name === "") {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "Name cannot be blank!",
        });
        return false;
      }
      if (formfields.email === "") {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "Email cannot be blank!",
        });
        return false;
      }
      if (formfields.phone === "") {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "Phone number cannot be blank!",
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
      // API call to register the user
      postData("/api/user/signup", formfields)
        .then((res) => {
          console.log(res);

          if (res.error !== true) {
            context.setAlertBox({
              open: true,
              error: false,
              msg: "Registration successfully completed!",
            });

            // Redirect to login page after a successful registration
            setTimeout(() => {
              setIsloading(false);
              history("/signIn");
            }, 2000);
          } else {
            setIsloading(false);
            // If the API returns a failure status, show the error message
            context.setAlertBox({
              open: true,
              error: true,
              msg: res.msg || "Registration failed!",
            });
          }
        })
        .catch((error) => {
          setIsloading(false);
          // Handle errors from the backend
          console.log(error);

          // Use the API error message if it exists
          const errorMsg =
            error?.response?.data?.msg ||
            "An error occurred during registration.";
          context.setAlertBox({
            open: true,
            error: true,
            msg: errorMsg,
          });
        });
    } catch (error) {
      setIsloading(false);
      // Handle unexpected errors
      console.log(error);
      context.setAlertBox({
        open: true,
        error: true,
        msg: "An unexpected error occurred!",
      });
    }
  };
  return (
    <section className="section signin-page signup-page">
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

          <form className="mt-2" onSubmit={register}>
            <h2 className="mb-3">Sign Up</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <TextField
                    // id="standard-basic"
                    label="Name"
                    type="text"
                    variant="standard"
                    className="w-100"
                    name="name"
                    onChange={onchangeInput}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <TextField
                    // id="standard-basic"
                    label="Phone"
                    type="number"
                    variant="standard"
                    className="w-100"
                    name="phone"
                    onChange={onchangeInput}
                  />
                </div>
              </div>
            </div>
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

            <a className="border-effect cursor txt">Forgot Password?</a>
            <div className="row mt-3 w-100">
              <div className="col-md-6">
                <Button className="btn-blue  col btn-lg btn-big" type="submit"
                disabled={isLoading===true ?true:false}>
                  {
                    isLoading === true ? <CircularProgress color="inherit" className=" loader"/> : "Sign In"
                  }
                 
                </Button>
              </div>
              <div className="col-md-6">
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
            </div>
            <div className="d-flex align-item-center mt-1 mb-3"></div>
            <p className="txt ">
              Note Registered?
              <Link to="/signIn" className="border-effect cursor ml-2">
                Sign In
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

export default SignUp;
