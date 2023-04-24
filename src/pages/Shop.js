import React, { useState, useEffect } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { BsCart3, BsHeart, BsEye, BsCart } from "react-icons/bs";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import axios from "axios";
export default function Shop() {
  const { promiseInProgress } = usePromiseTracker();
  const [ShopDetails, setShopDetails] = useState([]);
  useEffect(() => {
    trackPromise(
      axios
        .post(`https://app.soundchatradio.com:3000/api/v1/auth/listproduct`)
        .then((response) => {
          setShopDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  return (
    <>
      {/* <HeaderBottamSection /> */}
      <section className="new-store">
        <Swiper slidesPerView={1} navigation={true} modules={[Navigation]}>
          {ShopDetails.map((element) => {
            return (
              <>
                <SwiperSlide>
                  <div className="store">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="shop-text">
                            <h1>{element.title}</h1>
                            <h4>${element.Price}</h4>
                            {/* <NavLink to="/Cart">
                              <button>
                                <BsCart className="shop-11" /> Add To Cart
                              </button>
                            </NavLink> */}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="store-img">
                            <img
                              src={
                                "https://app.soundchatradio.com/soundradiobackend/images/product/" +
                                element.image
                              }
                              alt="img-error"
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>
      <section class="section-products">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <div class="header">
                <h3>Featured Product</h3>
                <h2>Popular Products</h2>
              </div>
            </div>
          </div>
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
              <div class="row">
                {ShopDetails.map((element) => {
                  return (
                    <>
                      <div class="col-sm-6 col-6 col-md-3 col-lg-4 col-xl-3">
                        {/* <NavLink
                          key={"/ProductDetails"}
                          to={`/ProductDetails/${element.id}`}
                          state={{
                            currentvideo: element,
                            related: ShopDetails,
                          }}
                        > */}
                          <div id="product-2" class="single-product">
                            <div class="part-1">
                              <img
                                src={
                                  "https://app.soundchatradio.com/soundradiobackend/images/product/" +
                                  element.image
                                }
                                alt="img-error"
                              />{" "}
                              <span class="discount">
                                {element.Discount} off
                              </span>
                              <ul>
                                {/* <li 
                                onClick={()=>{
                                addToCart(element)
                                }}
                                >
                                    <i>
                                      <BsCart3 />
                                    </i>
                                </li> */}
                                <li>
                                  <NavLink to={"/Login"}>
                                    <i>
                                      <BsHeart />
                                    </i>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    key={"/ProductDetails"}
                                    to={`/ProductDetails/${element.id}`}
                                    state={{
                                      currentvideo: element,
                                      related: ShopDetails,
                                    }}
                                  >
                                    <i>
                                      <BsEye />
                                    </i>
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                            <div class="part-2">
                              <h3 class="product-title">{element.title}</h3>
                              <h4 class="product-price">${element.Price}</h4>
                            </div>
                          </div>
                        {/* </NavLink> */}
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
      <FooterSection />
    </>
  );
}
