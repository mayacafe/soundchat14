import React, { useState, useEffect } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { BsFillPlayFill } from "react-icons/bs";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { ThreeDots } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function RecapSectionOne() {
  const { promiseInProgress } = usePromiseTracker();
  console.log(promiseInProgress);
  const [LatestRecapApiCall, setLatestRecapApiCall] = useState([]);
  const [LatestVideoCall, setLatestVideoCall] = useState([]);
  const [CategoryOneRecapApiCall, setCategoryOneRecapApiCall] = useState([]);
  const [CategoryTowRecapApiCall, setCategoryTowRecapApiCall] = useState([]);
  const [CategoryThreeRecapApiCall, setCategoryThreeRecapApiCall] = useState(
    []
  );
  const [CategoryFourthRecapApiCall, setCategoryFourthRecapApiCall] = useState(
    []
  );
  const [CategoryFiveRecapApiCall, setCategoryFiveRecapApiCall] = useState([]);
  const [CategorySixRecapApiCall, setCategorySixRecapApiCall] = useState([]);
  const [CategorySevenRecapApiCall, setCategorySevenRecapApiCall] = useState(
    []
  );
  const [CategoryEightRecapApiCall, setCategoryEightRecapApiCall] = useState(
    []
  );

  useEffect(() => {
    trackPromise(
      axios
        .post(
          `https://app.soundchatradio.com:3000/api/v1/auth/latestcontentlist`
        )
        .then((response) => {
          setLatestRecapApiCall(response.data.data.recaptv);
          setLatestVideoCall(response.data.data.recaptv);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);

  useEffect(() => {
    trackPromise(
      axios
        .post(`https://app.soundchatradio.com:3000/api/v1/auth/recaptvlist`)
        .then((response) => {
          setCategoryOneRecapApiCall(response.data.data["Mawnin Vibes Show"]);
          setCategoryTowRecapApiCall(
            response.data.data["SoundChat TV Random Mix"]
          );
          setCategoryThreeRecapApiCall(
            response.data.data["Time Travel Series "]
          );
          setCategoryFourthRecapApiCall(
            response.data.data["SoundChat Talk Show (Monday)"]
          );
          setCategoryFiveRecapApiCall(
            response.data.data["Winners Circle Sports"]
          );
          setCategorySixRecapApiCall(response.data.data["SoundChat Talk Show"]);
          setCategorySevenRecapApiCall(
            response.data.data["Talk Anything Fridays"]
          );
          setCategoryEightRecapApiCall(
            response.data.data["SUPA FRIDGE (REEEWIND SUN)"]
          );
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);

  const state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      768: {
        items: 3,
      },
      991: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  };

  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
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
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <>
            <OwlCarousel
              items={1}
              className="owl-carousel owl-theme "
              // loop

              autoplay={true}
              dots={false}
              touchDrag={true}
              lazyLoad={true}
            >
              {LatestVideoCall.map((element) => {
                return (
                  <>
                    <div className="video-slider recap-dd">
                      <img
                        src={
                          "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                          element.feature_img
                        }
                        alt=""
                      />

                      <div className="recap-video-heading recap-d1">
                        <div className="video-recap-btn-div">
                          <span className="recap-icon-w-div">
                            <BsFillPlayFill />
                          </span>
                          <NavLink
                            key={"/RecapTVShowsVideo"}
                            to="/RecapTVShowsVideo"
                            state={{
                              currentvideo: element,
                              related: LatestVideoCall,
                            }}
                          >
                            <button> &nbsp; &nbsp;WATCH NOW</button>
                          </NavLink>
                        </div>
                        <h1 className="recap-video-h1">{element.post_title}</h1>
                        <p className="recap-video-pra">
                          {element.post_excerpt}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </OwlCarousel>
            <div className="media-content-recap-section">
              <div className="current-trn-section">
                <h5>Trending On Rrcap TV</h5>
              </div>
              <div className="interview-div">
                <div className="interview-layout-div">
                  <div className="heading-section-h5">
                    <div className="news-heading bg-div-color">
                      <h5>Latest Recap TV Shows</h5>
                    </div>
                  </div>
                  <OwlCarousel
                    items={6}
                    className="owl-carousel owl-theme "
                    // loop
                    autoplay={false}
                    dots={false}
                    touchDrag={true}
                    lazyLoad={true}
                    responsive={state.responsive}
                    margin={20}
                  >
                    {LatestRecapApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/RecapTVShowsVideo"}
                            to="/RecapTVShowsVideo"
                            state={{
                              currentvideo: element,
                              related: LatestRecapApiCall,
                            }}
                          >
                            <div className="interview-img-section box">
                              <div className="img-recap">
                                <div class="media-content">
                                  <img
                                    src={
                                      "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                                      element.feature_img
                                    }
                                    alt=""
                                  />
                                  <div class="overlay">
                                    <div class="media-content-text">
                                      {element.post_excerpt}
                                    </div>
                                  </div>
                                  <div className="reacp-contnent recap-tow-sec">
                                    <p className="recap-pra">
                                      {" "}
                                      {element.post_title}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="interview-layout-div">
                  <div className="heading-section-h5">
                    <div className="news-heading bg-div-color">
                      <h5>Mawnin Vibes Show</h5>
                      <NavLink
                        key={"/RecapViewMoreVideo"}
                        to="/RecapViewMoreVideo"
                        state={{
                          related: CategoryOneRecapApiCall,
                          title:"Mawnin Vibes Show"
                        }}
                      >
                        <h6>View More</h6>
                      </NavLink>
                    </div>
                  </div>
                  <OwlCarousel
                    items={6}
                    className="owl-carousel owl-theme "
                    // loop

                    autoplay={false}
                    dots={false}
                    touchDrag={true}
                    lazyLoad={true}
                    responsive={state.responsive}
                    margin={20}
                  >
                    {CategoryOneRecapApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/RecapTVShowsVideo"}
                            to="/RecapTVShowsVideo"
                            state={{
                              currentvideo: element,
                              related: CategoryOneRecapApiCall,
                            }}
                          >
                            <div className="interview-img-section box">
                              <div className="img-recap">
                                <div class="media-content">
                                  <img
                                    src={
                                      "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                                      element.feature_img
                                    }
                                    alt=""
                                  />{" "}
                                  <div class="overlay">
                                    <div class="media-content-text">
                                      {element.post_excerpt}
                                    </div>
                                  </div>
                                  <div className="reacp-contnent recap-tow-sec">
                                    <p className="recap-pra">
                                      {" "}
                                      {element.post_title}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="interview-layout-div">
                  <div className="heading-section-h5">
                    <div className="news-heading bg-div-color">
                      <h5>SoundChat TV Random Mix</h5>
                      <NavLink
                        key={"/RecapViewMoreVideo"}
                        to="/RecapViewMoreVideo"
                        state={{
                          related: CategoryTowRecapApiCall,
                          title:"SoundChat TV Random Mix"
                        }}
                      >
                        <h6>View More</h6>
                      </NavLink>
                    </div>
                  </div>
                  <OwlCarousel
                    items={6}
                    className="owl-carousel owl-theme "
                    // loop

                    autoplay={false}
                    dots={false}
                    touchDrag={true}
                    lazyLoad={true}
                    responsive={state.responsive}
                    margin={20}
                  >
                    {CategoryTowRecapApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/RecapTVShowsVideo"}
                            to="/RecapTVShowsVideo"
                            state={{
                              currentvideo: element,
                              related: CategoryTowRecapApiCall,
                            }}
                          >
                            <div className="interview-img-section box">
                              <div className="img-recap">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                                    element.feature_img
                                  }
                                  alt=""
                                />
                                <div className="reacp-contnent recap-tow-sec">
                                  <p className="recap-pra">
                                    {element.post_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="interview-layout-div">
                  <div className="heading-section-h5">
                    <div className="news-heading bg-div-color">
                      <h5>Time Travel Series</h5>
                      <NavLink
                        key={"/RecapViewMoreVideo"}
                        to="/RecapViewMoreVideo"
                        state={{
                          related: CategoryThreeRecapApiCall,
                          title:"Time Travel Series"
                        }}
                      >
                        <h6>View More</h6>
                      </NavLink>
                    </div>
                  </div>
                  <OwlCarousel
                    items={6}
                    className="owl-carousel owl-theme "
                    // loop

                    autoplay={false}
                    dots={false}
                    touchDrag={true}
                    lazyLoad={true}
                    responsive={state.responsive}
                    margin={20}
                  >
                    {CategoryThreeRecapApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/RecapTVShowsVideo"}
                            to="/RecapTVShowsVideo"
                            state={{
                              currentvideo: element,
                              related: CategoryThreeRecapApiCall,
                            }}
                          >
                            <div className="interview-img-section box">
                              <div className="img-recap">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                                    element.feature_img
                                  }
                                  alt=""
                                />
                                <div className="reacp-contnent">
                                  <p className="recap-pra">
                                    {element.post_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="interview-layout-div">
                  <div className="heading-section-h5">
                    <div className="news-heading bg-div-color">
                      <h5>SoundChat Talk Show (Monday)</h5>
                      <NavLink
                        key={"/RecapViewMoreVideo"}
                        to="/RecapViewMoreVideo"
                        state={{
                          related: CategoryFourthRecapApiCall,
                          title:"SoundChat Talk Show (Monday)"
                        }}
                      >
                        <h6>View More</h6>
                      </NavLink>
                    </div>
                  </div>
                  <OwlCarousel
                    items={6}
                    className="owl-carousel owl-theme "
                    // loop

                    autoplay={false}
                    dots={false}
                    touchDrag={true}
                    lazyLoad={true}
                    responsive={state.responsive}
                    margin={20}
                  >
                    {CategoryFourthRecapApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/RecapTVShowsVideo"}
                            to="/RecapTVShowsVideo"
                            state={{
                              currentvideo: element,
                              related: CategoryFourthRecapApiCall,
                            }}
                          >
                            <div className="interview-img-section box">
                              <div className="img-recap">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                                    element.feature_img
                                  }
                                  alt=""
                                />
                                <div className="reacp-contnent">
                                  <p className="recap-pra">
                                    {element.post_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="interview-layout-div">
                  <div className="heading-section-h5">
                    <div className="news-heading bg-div-color">
                      <h5>Winners Circle Sports</h5>
                      <NavLink
                        key={"/RecapViewMoreVideo"}
                        to="/RecapViewMoreVideo"
                        state={{
                          related: CategoryFiveRecapApiCall,
                          title:"Winners Circle Sports"
                        }}
                      >
                        <h6>View More</h6>
                      </NavLink>
                    </div>
                  </div>
                  <OwlCarousel
                    items={6}
                    className="owl-carousel owl-theme "
                    // loop

                    autoplay={false}
                    dots={false}
                    touchDrag={true}
                    lazyLoad={true}
                    responsive={state.responsive}
                    margin={20}
                  >
                    {CategoryFiveRecapApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/RecapTVShowsVideo"}
                            to="/RecapTVShowsVideo"
                            state={{
                              currentvideo: element,
                              related: CategoryFiveRecapApiCall,
                            }}
                          >
                            <div className="interview-img-section box">
                              <div className="img-recap">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                                    element.feature_img
                                  }
                                  alt=""
                                />{" "}
                                <div className="reacp-contnent">
                                  <p className="recap-pra">
                                    {element.post_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="interview-layout-div">
                  <div className="heading-section-h5">
                    <div className="news-heading bg-div-color">
                      <h5>SoundChat Talk Show</h5>
                      <NavLink
                        key={"/RecapViewMoreVideo"}
                        to="/RecapViewMoreVideo"
                        state={{
                          related: CategorySixRecapApiCall,
                          title:"SoundChat Talk Show"
                        }}
                      >
                        <h6>View More</h6>
                      </NavLink>
                    </div>
                  </div>
                  <OwlCarousel
                    items={6}
                    className="owl-carousel owl-theme "
                    // loop

                    autoplay={false}
                    dots={false}
                    touchDrag={true}
                    lazyLoad={true}
                    responsive={state.responsive}
                    margin={20}
                  >
                    {CategorySixRecapApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/RecapTVShowsVideo"}
                            to="/RecapTVShowsVideo"
                            state={{
                              currentvideo: element,
                              related: CategorySixRecapApiCall,
                            }}
                          >
                            <div className="interview-img-section box">
                              <div className="img-recap">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                                    element.feature_img
                                  }
                                  alt=""
                                />{" "}
                                <div className="reacp-contnent">
                                  <p className="recap-pra">
                                    {element.post_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="interview-layout-div">
                  <div className="heading-section-h5">
                    <div className="news-heading bg-div-color">
                      <h5>Talk Anything Fridays</h5>
                      <NavLink
                        key={"/RecapViewMoreVideo"}
                        to="/RecapViewMoreVideo"
                        state={{
                          related: CategorySevenRecapApiCall,
                          title:"Talk Anything Fridays"
                        }}
                      >
                        <h6>View More</h6>
                      </NavLink>
                    </div>
                  </div>
                  <OwlCarousel
                    items={6}
                    className="owl-carousel owl-theme "
                    autoplay={false}
                    dots={false}
                    touchDrag={true}
                    lazyLoad={true}
                    responsive={state.responsive}
                    margin={20}
                  >
                    {CategorySevenRecapApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/RecapTVShowsVideo"}
                            to="/RecapTVShowsVideo"
                            state={{
                              currentvideo: element,
                              related: CategorySevenRecapApiCall,
                            }}
                          >
                            <div className="interview-img-section box">
                              <div className="img-recap">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                                    element.feature_img
                                  }
                                  alt=""
                                />{" "}
                                <div className="reacp-contnent">
                                  <p className="recap-pra">
                                    {element.post_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="interview-layout-div">
                  <div className="heading-section-h5">
                    <div className="news-heading bg-div-color">
                      <h5>SUPA FRIDGE (REEEWIND SUN)</h5>
                      <NavLink
                        key={"/RecapViewMoreVideo"}
                        to="/RecapViewMoreVideo"
                        state={{
                          related: CategoryEightRecapApiCall,
                          title:"SUPA FRIDGE (REEEWIND SUN)"
                        }}
                      >
                        <h6>View More</h6>
                      </NavLink>
                    </div>
                  </div>
                  <OwlCarousel
                    items={6}
                    className="owl-carousel owl-theme "
                    // loop

                    autoplay={false}
                    dots={false}
                    touchDrag={true}
                    lazyLoad={true}
                    responsive={state.responsive}
                    margin={20}
                  >
                    {CategoryEightRecapApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/RecapTVShowsVideo"}
                            to="/RecapTVShowsVideo"
                            state={{
                              currentvideo: element,
                              related: CategoryEightRecapApiCall,
                            }}
                          >
                            <div className="interview-img-section box">
                              <div className="img-recap">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                                    element.feature_img
                                  }
                                  alt=""
                                />{" "}
                                <div className="reacp-contnent">
                                  <p className="recap-pra">
                                    {element.post_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </>
                      );
                    })}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <FooterSection />
    </>
  );
}
