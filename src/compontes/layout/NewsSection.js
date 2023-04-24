import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import { Swiper, SwiperSlide } from "swiper/react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Pagination } from "swiper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img4 from "../../asstes/images/adv2.jpg";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BsFillCaretRightFill } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
export default function NewsSection() {
  const { promiseInProgress } = usePromiseTracker();
  const [StoriesApiCall, setStoriesApiCall] = useState([]);
  const [HomeTimelineApiCall, setHomeTimelineApiCall] = useState([]);
  const [RandomFinal, setRandomFinal] = useState([]);
  useEffect(() => {
    trackPromise(
      axios
        .post(`https://app.soundchatradio.com:3000/api/v1/auth/listtimeline`)
        .then((response) => {
          setStoriesApiCall(response.data.data.rows);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  useEffect(() => {
    const InterviewFinal = [...StoriesApiCall];
    var shuffled = InterviewFinal.sort(function () {
      return 0.5 - Math.random();
    });
    var selected = shuffled.slice(0, 3);
    setRandomFinal(selected);
    for (let i = 0; i < RandomFinal.length; i++) {
      setHomeTimelineApiCall((HomeTimelineApiCall) => [
        ...HomeTimelineApiCall,
        {
          timeline: RandomFinal[i].timelinemedia[0],
          desc: RandomFinal[i].post_desc,
          time: RandomFinal[i].createdAt,
          count: RandomFinal[i].timelinemedia.length - 1,
        },
      ]);
    }
  }, [StoriesApiCall]);

  const day = moment().tz("America/Detroit").format("dddd");
  const time = moment().tz("America/Detroit").format("HH:mm");
  const tomorrowDay = moment().add(1, 'days').tz("America/Detroit").format("dddd");
  const tomorrowTime = moment().add(1, 'days').tz("America/Detroit").format("HH:mm");
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
  const [LiveShow, setLiveShow] = useState([]);
  const [LiveShowsData, setLiveShowsData] = useState([]);
  const [tomorrow, settomorrow] = useState([]);
  useEffect(() => {
    trackPromise(
      axios
        .post(
          `https://app.soundchatradio.com:3000/api/v1/auth/listshowschedule`
        )
        .then((response) => {
          setLiveShow(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  useEffect(() => {
    for (let i = 0; i < LiveShow.length; i++) {
      if (LiveShow[i].post_title === day) {
        setLiveShowsData(LiveShow[i].scheduleperdays);
      }
    }
  }, [LiveShow]);

  useEffect( () => {
    for (let i = 0; i < LiveShow.length; i++) {
      if (LiveShow[i].post_title === tomorrowDay) {
        settomorrow(LiveShow[i].scheduleperdays)
      }
    }
  },[LiveShow])


  //console.log(LiveShowsData, "ok")
  return (
    <section className="bg-color">
      <div className="product-section">
        <div className="container-fluid">
          <Row>
            <Col xs={12} sm={12} md={12} lg={9}>
              <div className="slider-section">
                <div className="heading-section-h5">
                  <div className="news-heading ">
                    <h5>Live Podcast</h5>
                    <NavLink to="/Podcat">
                      <h6>
                        View More &nbsp;{" "}
                        <span>
                          <FiArrowRight />
                        </span>
                      </h6>
                    </NavLink>
                  </div>
                </div>
                {promiseInProgress === true ? (
                  <div
                    className="spinner"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignIitems: "center",
                      height:"300px",
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

                      {(LiveShowsData.length>0) ? <>  {LiveShowsData.map((element) => {
                        return (
                          <>
                          {((time)<=element.show_start_date)  ? 
                          ( <NavLink to="/PodcastList">
                              <div className="live-podcast">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                    element.show_image
                                  }
                                  alt="img-error"
                                />
                              </div>
                            </NavLink>) 
                            :
                             (<></>)
                             }
                           
                          </>
                        );
                      })}</>:<>
                        {tomorrow.map((element) => {
                        return (
                          <>
                          {((tomorrowTime)<=element.show_start_date)  ? 
                          ( <NavLink to="/PodcastList">
                              <div className="live-podcast">
                                <img
                                  src={
                                    "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                    element.show_image
                                  }
                                  alt="img-error"
                                />
                              </div>
                            </NavLink>) 
                            :
                             (<></>)
                             }
                           
                          </>
                        );
                      })}
                      </>}
                    
                    </OwlCarousel>
                  </>
                )}
              </div>

              <div>
                <div className="heading-section-h5">
                  <div className="news-heading ">
                    <h5>Latest Stories</h5>
                    <NavLink
                      key={"/Stories"}
                      to="/Stories"
                      state={{
                        related: StoriesApiCall,
                      }}
                    >
                      <h6>
                        {" "}
                        <div className="icon-news-div">
                          More Stories&nbsp;{" "}
                          <span>
                            <FiArrowRight />
                          </span>
                        </div>
                      </h6>
                    </NavLink>
                  </div>
                </div>
                {/*  */}
                {/* */}
                {promiseInProgress === true ? (
                  <div
                    className="spinner"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignIitems: "center",
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
                    <Swiper
                      spaceBetween={8}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper"
                      slidesPerView={3}
                      autoplay={{
                        clickable: false,
                      }}
                      // className="mySwiper"
                      breakpoints={{
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 5,
                        },

                        768: {
                          slidesPerView: 2,
                          spaceBetween: 5,
                        },
                        767: {
                          slidesPerView: 1,
                          spaceBetween: 5,
                        },

                        575: {
                          slidesPerView: 1,
                          spaceBetween: 5,
                        },
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 5,
                        },
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 5,
                        },
                      }}
                    >
                      {HomeTimelineApiCall.map((element) => {
                        return (
                          <>
                            {element.timeline.media_type === "image" ? (
                              <SwiperSlide>
                                <section class="showcase">
                                  <div className="day-div">
                                    <p>
                                      {moment(element.timeline.time).format(
                                        "ddd, MMM MM, YYYY"
                                      )}
                                    </p>
                                  </div>
                                  {/* <div className="day-div">
                                    {element.count > 0 ? (
                                      <p>+{element.count}</p>
                                    ) : (
                                      <></>
                                    )}
                                  </div> */}
                                  <img
                                    src={
                                      "https://app.soundchatradio.com/soundradiobackend/images/timeline/" +
                                      element.timeline.media_name
                                    }
                                    alt="err_img"
                                  />
                                  <div class="overlay">
                                    <h2>{element.desc}</h2>
                                    <p>View Story</p>
                                  </div>
                                </section>
                              </SwiperSlide>
                            ) : element.timeline.media_type === "video" ? (
                              <SwiperSlide>
                                <section className="showcase">
                                  <div className="day-div">
                                    <p>
                                      {moment(element.timeline.time).format(
                                        "ddd, MMM MM, YYYY"
                                      )}
                                    </p>
                                  </div>
                                  {/* <div className="day-div">
                                    {element.count > 0 ? (
                                      <p>+{element.count}</p>
                                    ) : (
                                      <></>
                                    )}
                                  </div> */}
                                  <img
                                    src={
                                      "https://app.soundchatradio.com/soundradiobackend/images/thumbnail/" +
                                      element.timeline.media_thumbnail
                                    }
                                    alt="err_img_video"
                                  />
                                  <div className="news-video-icn">
                                    <BsFillCaretRightFill />
                                  </div>
                                  <div class="overlay">
                                    <h2>{element.desc}</h2>
                                    <p>View Story</p>
                                  </div>
                                </section>
                              </SwiperSlide>
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })}
                      <SwiperSlide></SwiperSlide>
                    </Swiper>
                  </>
                )}
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={3}>
              <div className="news-arive-1">
              
                <div class="adv-div">
                  <img src={img4} alt="" />
                  <div className="produc-news-name">
                  <div className="head-images-news">
                  <h2>SoundChat Radio Tote bag</h2>
                </div>
                  <div class="middle">
                    <NavLink to="/Shop">Shop Now</NavLink>
                  </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
