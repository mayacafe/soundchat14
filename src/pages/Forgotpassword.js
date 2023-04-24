import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import logo from "../asstes/images/logo.png";
import { useFormik } from "formik";
import { BsFillLockFill,BsArrowLeft } from "react-icons/bs";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Forgotpassword() {
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

  function handleSubmit(values) {
    axios({
      method: "POST",
      url: "https://app.soundchatradio.com:3000/api/v1/auth/forgetpassword",
      data: {
        mobile_no: values.email,
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "User not found with this user name or email") {
          showToastMessageone(response.data.message);
        }else{
          showToastMessage(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .ensure()
        .email("Invalid email format")
        .matches(/^\S*$/, "Email Not Valide")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <div className="forgot-paasword">
      <div class="container">
        <div class="row main-content  text-center">
          <div class="col-lg-8 offset-2 col-xs-12 col-sm-12 login_form ">
            <div class="company__logo_forgot">
              <img src={logo} alt="scarner" />
            </div>
            <div class="login-text">
              <h2>Forgot your password?</h2>
              <p className="forgot-text">You can reset your password here.</p>
            </div>
            <form class="form-group" onSubmit={formik.handleSubmit}>
              <div class="row">
                <div className="login-demo">
                  <lable className="login-lable">Email</lable>
                  <span className="login-user-demo">
                    <MdOutlineAlternateEmail />
                  </span>
                  <input
                    type="text"
                    name="email"
                    autoComplete="off"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    class="form__input"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="errormessage">{formik.errors.email}</p>
                  )}
                </div>
              </div>
              <button type="submit" className="login-from-btn">
                Reset Password
              </button>
            </form>

            <div class="row mt-4">
              <div className="dont-here">
                <p class="back-to-login">
                  {" "}
                  <a href="#"></a>
                </p>
               
                <p>
                <BsArrowLeft/>  Back to
                  <NavLink to="/Login" className="dont-here-1">
                    Login
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forgotpassword;
