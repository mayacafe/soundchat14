import React, { useState } from "react";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Checkout() {
  const [number, setNumber] = useState();
  function handleSubmit(values) {}

  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  const formik = useFormik({
    initialValues: {
      fname: "",
      email: "",
      mobileno: "",
      state: "",
      city: "",
      country: "",
      address1: "",
      address2: "",
      postcod: "",
      cardNumber: "",
      Card: "",
      Expiry: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .trim()
        .ensure()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/, "Invalid First Name")
        .required("Required!"),

      state: Yup.string()
        .trim()
        .ensure()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/, "Invalid State")
        .required("Required!"),

      city: Yup.string()
        .trim()
        .ensure()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/, "Invalid City")
        .required("Required!"),

      country: Yup.string()
        .trim()
        .ensure()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/, "Invalid Country")
        .required("Required!"),

      address1: Yup.string().trim().required("Required!"),

      address2: Yup.string().trim().required("Required!"),

      postcod: Yup.string()
        .trim()
        .min(6, "not less than 6")
        .matches(/^\d{0,6}$/, "Invalid Postal code")
        .required("Required!"),

      email: Yup.string()
        .trim()
        .ensure()
        .email("Invalid email format")
        .matches(/^\S*$/, "Email Not Valide")
        .required("Required!"),

      mobileno: Yup.string()
        .matches(phoneRegex, "Invalid phone")
        .required("Phone is required"),

      cardNumber: Yup.number()
        // .matches("Invalid Card Number")
        .min(16, "not less than 16")
        // .matches(/^\d{0,16}$/, "Invalid cardNumber")
        .required("Required!"),

      Card: Yup.string()
        .min(3, "not less than 3")
        .matches(/^\d{0,3}$/, "Invalid Cvv")
        .required("Required!"),

      Expiry: Yup.number()
        // .min(3, "not less than 3")
        // .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/gm
        // , "Invalid Expiry Date")
        .required("Required!"),
    }),

    onSubmit: (values) => {
      formik.resetForm();
      handleSubmit(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleTransition = (cardInner, numberItem) => {
    setNumber(numberItem);
  };

  return (
    <>
      <HeaderBottamSection />
      <div className="Checout-main">
        <form onSubmit={formik.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div class=" checkout-bg-default">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <lable className="billing-checkout">Name*</lable>
                        <input
                          type="text"
                          name="fname"
                          class="form__input-1"
                          value={formik.values.fname}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.fname && formik.touched.fname && (
                          <p className="errormessage">{formik.errors.fname}</p>
                        )}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">Email*</lable>
                        <input
                          type="email"
                          name="email"
                          class="form__input-1"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <p className="errormessage">{formik.errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">Phone*</lable>
                        <input
                          type="text"
                          name="mobileno"
                          class="form__input-1"
                          value={formik.values.mobileno}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.mobileno && formik.touched.mobileno && (
                          <p className="errormessage">
                            {formik.errors.mobileno}
                          </p>
                        )}
                      </div>
                    </div>
                    <h4 class="my-4">Billing Address</h4>

                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Postal Code *
                        </lable>
                        <input
                          type="text"
                          name="postcod"
                          class="form__input-1"
                          value={formik.values.postcod}
                          onChange={formik.handleChange}
                          maxlength="6"
                        />
                        {formik.errors.postcod && formik.touched.postcod && (
                          <p className="errormessage">
                            {formik.errors.postcod}
                          </p>
                        )}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">State *</lable>
                        <input
                          type="text"
                          name="state"
                          class="form__input-1"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.state && formik.touched.state && (
                          <p className="errormessage">{formik.errors.state}</p>
                        )}
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">Country *</lable>
                        <input
                          type="text"
                          name="country"
                          class="form__input-1"
                          value={formik.values.country}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.country && formik.touched.country && (
                          <p className="errormessage">
                            {formik.errors.country}
                          </p>
                        )}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">City *</lable>
                        <input
                          type="text"
                          name="city"
                          class="form__input-1"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.city && formik.touched.city && (
                          <p className="errormessage">{formik.errors.city}</p>
                        )}
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Address Line 1 *
                        </lable>
                        <input
                          type="text"
                          name="address1"
                          class="form__input-1"
                          value={formik.values.address1}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.address1 && formik.touched.address1 && (
                          <p className="errormessage">
                            {formik.errors.address1}
                          </p>
                        )}
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Address Line 2 *
                        </lable>
                        <input
                          type="text"
                          name="address2"
                          class="form__input-1"
                          value={formik.values.address2}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.address2 && formik.touched.address2 && (
                          <p className="errormessage">
                            {formik.errors.address2}
                          </p>
                        )}
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-12">
                      <h5 class="my-4">Shipning Address</h5>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                      <div class="checkbox bg pull-right">
                        <label>
                          <input
                            type="checkbox"
                            name="same"
                            value="1"
                            id="same_as_billing"
                          />
                          <span>Same as Billing Address </span>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Postal Code *
                        </lable>
                        <input
                          type="text"
                          name="postcod"
                          class="form__input-1"
                          value={formik.values.postcod}
                          onChange={formik.handleChange}
                          maxlength="6"
                        />
                        {formik.errors.postcod && formik.touched.postcod && (
                          <p className="errormessage">
                            {formik.errors.postcod}
                          </p>
                        )}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">State *</lable>
                        <input
                          type="text"
                          name="state"
                          class="form__input-1"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.state && formik.touched.state && (
                          <p className="errormessage">{formik.errors.state}</p>
                        )}
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">Country *</lable>
                        <input
                          type="text"
                          name="country"
                          class="form__input-1"
                          value={formik.values.country}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.country && formik.touched.country && (
                          <p className="errormessage">
                            {formik.errors.country}
                          </p>
                        )}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="form-group">
                        <lable className="billing-checkout">City *</lable>
                        <input
                          type="text"
                          name="city"
                          class="form__input-1"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.city && formik.touched.city && (
                          <p className="errormessage">{formik.errors.city}</p>
                        )}
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Address Line 1 *
                        </lable>
                        <input
                          type="text"
                          name="address1"
                          class="form__input-1"
                          value={formik.values.address1}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.address1 && formik.touched.address1 && (
                          <p className="errormessage">
                            {formik.errors.address1}
                          </p>
                        )}
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div className="form-group">
                        <lable className="billing-checkout">
                          Address Line 2 *
                        </lable>
                        <input
                          type="text"
                          name="address2"
                          class="form__input-1"
                          value={formik.values.address2}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.address2 && formik.touched.address2 && (
                          <p className="errormessage">
                            {formik.errors.address2}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="checoutng-1">
                  <div class="card mb-4">
                    <div className="total-shping-cart">
                      <h5>PAYMENTS METHOD</h5>
                      <h6 className="Accepted-card">Accepted Cards</h6>
                      <div class="col-md-12 ">
                        <div className="form-group">
                          <lable className="billing-checkout">
                            Card Number
                          </lable>
                          <input
                           
                            type="text"
                            class="form__input-1"
                            name="cardNumber"
                            placeholder="Enter Card Number"
                            // value={formik.values.cardNumber}
                            onChange={formik.handleChange}
                            value={formik.values.cardNumber
                              .replace(/\s/g, "")
                              .replace(/(\d{4})/g, "$1 ")
                              .trim()}
                            maxlength="19"
                          />
                          {formik.errors.cardNumber &&
                            formik.touched.cardNumber && (
                              <p className="errormessage">
                                {formik.errors.cardNumber}
                              </p>
                            )}
                        </div>
                      </div>

                      <div class="col-md-6 col-sm-6">
                        <div className="form-group-neety">
                          <lable className="billing-checkout">
                            Expiry Date
                          </lable>
                          <input
                     
                            type="text"
                            name="Expiry"
                            placeholder="MM/YY"
                            onChange={formik.handleChange}
                            value={formik.values.Expiry
                              .replace(/\s/g, "/")
                              .replace(/(\d{2})/g, "$1 ")
                              .trim()}
                              maxlength="5"
                            // value={formik.values.Expiry}
                            class="form__input-1 "
                            // pattern="\d\d/\d\d"
                          />
                          {formik.errors.Expiry && formik.touched.Expiry && (
                            <p className="errormessage">
                              {formik.errors.Expiry}
                            </p>
                          )}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div className="form-group">
                          <lable className="billing-checkout">CVV</lable>
                          <input
                       
                            type="text"
                            name="Card"
                            class="form__input-1"
                            placeholder="Cvv"
                            onChange={formik.handleChange}
                            value={formik.values.Card}
                            maxlength="3"
                          />
                          {formik.errors.Card && formik.touched.Card && (
                            <p className="errormessage">{formik.errors.Card}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className="total-shping-cart">
                    <h5> TOTALS</h5>
                    <table>
                      <tbody>
                        <tr>
                          <td className="cart-total-text">Total w/o Tax</td>
                          <td class="text-right total-new-tt">$847.46</td>
                        </tr>
                        <tr>
                          <td className="cart-total-text">Product Tax</td>
                          <td class="text-right total-new-tt">$152.54</td>
                        </tr>
                        <tr>
                          <td className="cart-total-text">Total</td>
                          <td class="text-right total-new-tt">TTD $539.00</td>
                        </tr>
                        <tr>
                          <td className="cart-total-text">Order Tax</td>
                          <td class="text-right total-new-tt">0.00</td>
                        </tr>
                        <tr>
                          <td className="cart-total-text">Shipping *</td>
                          <td class="text-right total-new-tt">TTD $50.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="grand-tut-t1">
                      <h6>
                        Grand Total
                        <span>$1,000.00</span>
                      </h6>
                    </div>
                    <div className="checkout">
                      <button type="submit" className="block">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <FooterSection />
    </>
  );
}
