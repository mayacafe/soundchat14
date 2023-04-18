import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import { BsGeoAlt, BsTelephoneForward, BsEnvelopeOpen } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImInstagram } from "react-icons/im";

export default function Contact() {
  // mobile number validation
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  const formik = useFormik({
    initialValues: {
      firstname: "",
      detail: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string()
        .trim()
        .ensure()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/, "Invalid Name")
        .required("Required!"),

      detail: Yup.string()
        .trim()
        .ensure()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/, "Invalid Message")
        .required("Required!"),

      email: Yup.string()
        .trim()
        .ensure()
        .email("Invalid email format")
        .matches(/^\S*$/, "Empty Whitespace Not Allowed")
        .required("Required!"),

      phone: Yup.string()
        .matches(phoneRegex, "Invalid phone Number")
        .required("Phone is required"),
    }),
    onSubmit: (values) => {
      formik.resetForm();
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <section id="contact">
          <div class="contact-wrapper">
            <div className="container">
              <h1 class="section-header">Get In Touch With Us</h1>
              <p class="contact-prgrap">
                Anything On your Mind. We’ll Be Glad To Assist You!
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div class="direct-contact">
                    <ul class="contact-list">
                      <h6>New York Office</h6>

                      <li class="list-item">
                        <i>
                          <BsTelephoneForward />
                        </i>
                        <span class="contact-text phone">
                          <Link to="/#" title="Give me a call">
                            (347)-514-7520
                          </Link>
                        </span>
                      </li>

                      <li class="list-item">
                        <i>
                          <BsEnvelopeOpen />
                        </i>
                        <span class="contact-text gmail">
                          <Link to="/#" title="Send me an email">
                            mailto:info@soundchatradio.com,irishandchin
                            {/* <br></br>
                            <h5></h5> */}
                          </Link>
                        </span>
                      </li>
                      <li class="list-item">
                        <i>
                          {" "}
                          <BsGeoAlt />
                        </i>
                        <span class="contact-text place">
                          139-20 C 109thAve,Jamaica,NY,11435
                        </span>
                      </li>
                    </ul>
                    <ul class="contact-list mt-5">
                      <h6>Kingston,Jamaica</h6>

                      <li class="list-item">
                        <i>
                          <BsTelephoneForward />
                        </i>
                        <span class="contact-text phone">
                          <Link to="/#" title="Give me a call">
                            +1(879)-665-5526,(347)-514-7520
                            {/* <br></br>
                            <h5> </h5> */}
                          </Link>
                        </span>
                      </li>

                      <li class="list-item">
                        <i>
                          <BsEnvelopeOpen />
                        </i>
                        <span class="contact-text gmail">
                          <Link to="/#" title="Send me an email">
                            mailto:irishandchin@gmail.com
                          </Link>
                        </span>
                      </li>
                      <li class="list-item">
                        <i>
                          {" "}
                          <BsGeoAlt />
                        </i>
                        <span class="contact-text place">
                          Eastwood Park,Kingston,Jamaica
                        </span>
                      </li>
                    </ul>

                    <hr />
                    <ul class="social-media-list">
                      <li>
                        <a href="#" target="_blank" class="contact-icon">
                          <i>
                            {" "}
                            <ImFacebook />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" class="contact-icon">
                          <i>
                            <ImInstagram />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" class="contact-icon">
                          <i>
                            <ImTwitter />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" class="contact-icon">
                          <i>
                            <ImYoutube />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <hr />
                  </div>
                </div>
                <div className="col-md-6">
                  <h1 class="contact-header-form">Write A Message</h1>
                  <form
                    id="contact-form"
                    class="form-horizontal"
                    onSubmit={formik.handleSubmit}
                  >
                    <div class="form-group">
                      <div class="col-sm-12">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Name"
                          name="firstname"
                          autoComplete="off"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.firstname &&
                          formik.touched.firstname && (
                            <p className="errormessage-1">
                              {formik.errors.firstname}
                            </p>
                          )}
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="col-sm-12">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter Email"
                          name="email"
                          autoComplete="off"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <p className="errormessage-1">
                            {formik.errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-12">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Mobile Number"
                          name="phone"
                          autoComplete="off"
                          value={formik.values.mobile}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.phone && formik.touched.phone && (
                          <p className="errormessage-1">
                            {formik.errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <textarea
                      class="form-control"
                      rows="4"
                      placeholder="Enter Message"
                      name="detail"
                      // type="text"
                      autoComplete="off"
                      value={formik.values.detail}
                      onChange={formik.handleChange}
                    ></textarea>
                    {formik.errors.detail && formik.touched.detail && (
                      <p className="errormessage-1">{formik.errors.detail}</p>
                    )}

                    <button class="send-button" type="submit">
                      <div class="alt-send-button">
                        <i class="fa fa-paper-plane"></i>
                        <span class="send-text">SEND</span>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <FooterSection />
    </>
  );
}
