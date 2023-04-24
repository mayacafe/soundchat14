import React, { useState} from "react";
import { BsFillLockFill, BsArrowLeft } from "react-icons/bs";
import logo from "../asstes/images/logo.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import scarner from "../asstes/images/scarner.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";

function Login() {
  const { promiseInProgress } = usePromiseTracker();

  const showToastMessage = (data) => {
    toast.success(data, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const showToastMessageone = (data) => {
    toast.error(data, {
      position: toast.POSITION.TOP_CENTER,
    });
  };


  const getItem_User =   JSON.parse(localStorage.getItem("username"))
  const getItem_Password =   JSON.parse(localStorage.getItem("password"))
  const getItem_Checked = JSON.parse(localStorage.getItem("isCheck"))
  console.log(getItem_Checked, "ok")

  function handleSubmit(values) {
    trackPromise(
    axios({
      method: "POST",
      url: "https://app.soundchatradio.com:3000/api/v1/auth/signin",
      data: {
        mobileno: values.mobileno,
        password: values.password,
        isChecked : values.isChecked
      },
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response.data , "ok");
        if (response.data.status === 400) {
          showToastMessageone(response.data.message);
          localStorage.removeItem("accessToken");
        } else {
          showToastMessage("login successfuly");
          localStorage.setItem(
            "accessToken",
            JSON.stringify(response.data.accessToken)
          );
        }
        localStorage.setItem("username", JSON.stringify(values.mobileno))
        localStorage.setItem("password", JSON.stringify(values.password))
        localStorage.setItem("isCheck", JSON.stringify(values.isChecked))

      })
      .catch((error) => {
        console.log(error.response);
      })
    );
  }

  const formik = useFormik({
    initialValues:(getItem_Checked)? {
      mobileno: getItem_User,
      password: getItem_Password,
      isChecked: getItem_Checked,
    }:{
      mobileno: "",
      password: "",
      isChecked: false,
    },
    validationSchema: Yup.object({
      mobileno: Yup.string()
        //.email("Invalid email format")
        // .matches(/^\S*$/, "Empty Whitespace Not Allowed")
        .required("Required!"),

      password: Yup.string()
        .trim()
        .ensure()
        .min(6, "Minimum 6 characters")
        .required("Required!"),
      // remeber: Yup.string()
      //   .required("Required!"),
    }),
    onSubmit: (values) => {
      // console.log(values)
      handleSubmit(values);
      formik.resetForm();
      //  alert(JSON.stringify(values, null, 2));
    },
  });

  // password shoe hide
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const eye = passwordShown ? (
    <FaRegEye icon={FaRegEye} />
  ) : (
    <FaRegEyeSlash icon={FaRegEyeSlash} />
  );
  return (
    <div className="login">
    <div class="container-fluid">
      <div class="row main-content  text-center">
        <div class="col-md-5 text-center company__info">
          <span class="company__logo">
            <img src={scarner} alt="scarner" />
          </span>
        </div>
        <div class="col-md-7 col-xs-12 col-sm-12">
          <div class="row">
            <div className="col-md-3">
              <div class="login-logo">
                <img src={logo} alt="scarner" />
              </div>
            </div>
            <div className="col-md-9">
              <div class="login-text">
                <h2 class="hr-lines">Sign In</h2>
              </div>
            </div>
          </div>
          <div class="row">
            {promiseInProgress === true ? (
              <div
                className="spinner"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignIitems: "center",
                  height: "300px",
                }}
              >
                <ThreeDots
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <>
                <form class="form-group" onSubmit={formik.handleSubmit}>
                  <div class="row">
                    <div className="login-demo">
                      <lable className="login-lable">Username/Email</lable>
                      <span className="login-user-demo">
                        <FaUserAlt />
                      </span>
                      <input
                        type="text"
                        name="mobileno"
                        autoComplete="off"
                        value={formik.values.mobileno}
                        onChange={formik.handleChange}
                        class="form__input"
                      />
                      {formik.errors.mobileno && formik.touched.mobileno && (
                        <p className="errormessage">
                          {formik.errors.mobileno}
                        </p>
                      )}
                    </div>
                  </div>

                  <div class="row">
                    <div className="login-demo">
                      <lable className="login-lable">password</lable>
                      <span className="login-user-demo">
                        <BsFillLockFill />
                      </span>
                      <input
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        id="password"
                        class="form__input"
                        autoComplete="off"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      <span className="password-1">
                        <i onClick={togglePasswordVisiblity}>{eye}</i>
                      </span>
                      {formik.errors.password && formik.touched.password && (
                        <p className="errormessage">
                          {formik.errors.password}
                        </p>
                      )}
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="rember">
                        <input
                          type="checkbox"
                          name="isChecked"
                          id="remember_me"
                          checked={formik.values.isChecked}
                          value={formik.values.isChecked}
                          onChange={formik.handleChange}
                        />
                        <label for="remember_me">Remember Me!</label>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="forgot">
                        <NavLink to="/Forgotpassword">
                          Forgot Password
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div className="col-md-12">
                      <button type="submit" className="login-from-btn">
                        Sign In
                      </button>
                    </div>
                  </div>
                  <ToastContainer />
                </form>
              </>
            )}
          </div>
          <div class="row">
            <div className="col-xl-4 col-md-4 col-sm-4 col-4">
              <NavLink to="/" className="bac-to-home">
                <BsArrowLeft /> Back
              </NavLink>
            </div>
            <div className="col-xl-8 col-md-8 col-sm-8 col-8">
              <div className="dont-here">
                <p>
                  Don't have an account?
                  <NavLink to="/Register" className="dont-here-1">
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Login;
