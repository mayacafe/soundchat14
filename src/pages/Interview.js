import React, { useState, useEffect } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
import { BsFillPlayFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import axios from "axios";

export default function InterviewSection() {
  const { promiseInProgress } = usePromiseTracker();
  console.log(promiseInProgress);

  const [EventOneApiCall, setEventOneApiCall] = useState([]);
  const [YelloOneApiCall, setYelloOneApiCall] = useState([]);
  const [InStOneApiCall, setInStOneApiCall] = useState([]);
  const [SoundSystemOneApiCall, setSoundSystemOneApiCall] = useState([]);
  const [PhoneInterviewOneApiCall, setPhoneInterviewOneApiCall] = useState([]);
  const [LatestInterviewApiCall, setLatestInterviewApiCall] = useState([]);
  const [InterviewVideo, setInterviewVideo] = useState([]);

  useEffect(() => {
    trackPromise(
      axios
        .post(`https://app.soundchatradio.com:3000/api/v1/auth/interviews`)
        .then((response) => {
          setEventOneApiCall(response.data.data.EVENTS);
          setYelloOneApiCall(response.data.data["YELLOW-TENT"]);
          setInStOneApiCall(response.data.data["IN-STUDIO"]);
          setSoundSystemOneApiCall(response.data.data["SOUND SYSTEM CULTURE"]);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);

  useEffect(() => {
    trackPromise(
      axios
        .post(
          `https://app.soundchatradio.com:3000/api/v1/auth/latestcontentlist`
        )
        .then((response) => {
          setLatestInterviewApiCall(response.data.data.interview);
          setInterviewVideo(response.data.data.interview);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);

  useEffect(() => {
    trackPromise(
      axios
        .post(
          `https://app.soundchatradio.com:3000/api/v1/auth/listphoneinterviews`
        )
        .then((response) => {
          setPhoneInterviewOneApiCall(response.data.data);
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
        <OwlCarousel
          items={1}
          className="owl-carousel owl-theme "
          loop
          autoplay={true}
          dots={false}
          touchDrag={true}
          lazyLoad={true}
        >
          {InterviewVideo.map((element) => {
            return (
              <>
                <div className="slider-new">
                  <div className="video-slider">
                    <img
                      src={
                        "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                        element.feature_img
                      }
                      alt=""
                    />

                    <div className="recap-video-heading">
                      <div className="video-recap-btn-div">
                        <span className="recap-icon-w-div">
                          <BsFillPlayFill />
                        </span>
                        <NavLink
                          key={"/SoundSystemViewVideo"}
                          to="/SoundSystemViewVideo"
                          state={{
                            currentvideo: element,
                            related: InterviewVideo,
                          }}
                        >
                          <button> &nbsp; &nbsp;WATCH NOW</button>
                        </NavLink>
                      </div>
                      <h1 className="recap-video-h1">{element.post_title}</h1>
                      <p className="recap-video-pra">{element.post_excerpt}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </OwlCarousel>

        <div className="media-content-recap-section">
          <div className="current-trn-section">
            <h5>Currently Trending Interview</h5>
          </div>

          <div className="interview-div">
            {promiseInProgress === true ? (
              <div
                className="spinner"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignIitems: "center",
                  height: "200px",
                }}
              >
                <ThreeDots
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <>
                <div className="interview-layout-div">
                  <div className="heading-section-h5">
                    <div className="news-heading bg-div-color">
                      <h5>LATEST INTERVIEWS</h5>
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
                    {LatestInterviewApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/SoundSystemViewVideo"}
                            to="/SoundSystemViewVideo"
                            state={{
                              currentvideo: element,
                              related: LatestInterviewApiCall,
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
                      <h5>SOUND SYSTEM CULTURE</h5>
                      <NavLink
                        key={"/SoundSystemCulture"}
                        to="/SoundSystemCulture"
                        state={{
                          related: SoundSystemOneApiCall,
                          title:"SOUND SYSTEM CULTURE"
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
                    {SoundSystemOneApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/SoundSystemViewVideo"}
                            to="/SoundSystemViewVideo"
                            state={{
                              currentvideo: element,
                              related: SoundSystemOneApiCall,
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
                      <h5>IN-STUDIO</h5>
                      <NavLink
                        key={"/SoundSystemCulture"}
                        to="/SoundSystemCulture"
                        state={{
                          related: InStOneApiCall,
                          title:"IN-STUDIO"
                          
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
                    {InStOneApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/SoundSystemViewVideo"}
                            to="/SoundSystemViewVideo"
                            state={{
                              currentvideo: element,
                              related: InStOneApiCall,
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
                      <h5>EVENTS</h5>
                      <NavLink
                        key={"/SoundSystemCulture"}
                        to="/SoundSystemCulture"
                        state={{
                          related: EventOneApiCall,
                          title:"EVENTS"
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
                    {EventOneApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/SoundSystemViewVideo"}
                            to="/SoundSystemViewVideo"
                            state={{
                              currentvideo: element,
                              related: EventOneApiCall,
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
                      <h5>YELLOW-TENT</h5>
                      <NavLink
                        key={"/SoundSystemCulture"}
                        to="/SoundSystemCulture"
                        state={{
                          related: YelloOneApiCall,
                          title:"YELLOW-TENT"
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
                    {YelloOneApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/SoundSystemViewVideo"}
                            to="/SoundSystemViewVideo"
                            state={{
                              currentvideo: element,
                              related: YelloOneApiCall,
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
                      <h5>PHONE INTERVIEW</h5>
                      <NavLink
                        key={"/SoundSystemCulture"}
                        to="/SoundSystemCulture"
                        state={{
                          related: PhoneInterviewOneApiCall,
                          title:"PHONE INTERVIEW"
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
                    {PhoneInterviewOneApiCall.map((element) => {
                      return (
                        <>
                          <NavLink
                            key={"/SoundSystemViewVideo"}
                            to="/SoundSystemViewVideo"
                            state={{
                              currentvideo: element,
                              related: PhoneInterviewOneApiCall,
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
              </>
            )}
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
