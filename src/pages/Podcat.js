import React, { useState, useEffect } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import OwlCarousel from "react-owl-carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import moment from "moment-timezone";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import { NavLink } from "react-router-dom";
import download1 from "../asstes/images/download1.jpg";
export default function Podcat() {
  const { promiseInProgress } = usePromiseTracker();
  const day = moment().tz("America/Detroit").format("dddd");
  const time = moment().tz("America/Detroit").format("HH:mm");
  const tomorrowDay = moment().add(1, 'days').tz("America/Detroit").format("dddd");
  const tomorrowTime = moment().add(1, 'days').tz("America/Detroit").format("HH:mm");
  const [UpcomingShow, setUpcomingShow] = useState([]);
  const [tomorrow, settomorrow] = useState([]);
  const [MondayPodcast, setMondayPodcast] = useState([]);
  const [ThusedayPodcast, setThusedayPodcast] = useState([]);
  const [WednesdayPodcast, setWednesdayPodcast] = useState([]);
  const [ThursdayPodcast, setThursdayPodcast] = useState([]);
  const [FridaydayPodcast, setFridaydayPodcast] = useState([]);
  const [SaturdayPodcast, setSaturdayPodcast] = useState([]);
  const [SundayPodcast, setSundaydayPodcast] = useState([]);
  const [LiveShowsData, setLiveShowsData] = useState([]);
  const [StartingTime, setStartingTime] = useState(0);
  const [EndingTime, setEndingTime] = useState(0);
  useEffect(() => {
    trackPromise(
      axios
        .post(
          `https://app.soundchatradio.com:3000/api/v1/auth/listshowschedule`
        )
        .then((response) => {
          setUpcomingShow(response.data.data);
          setMondayPodcast(response.data.data[6].scheduleperdays);
          setThusedayPodcast(response.data.data[5].scheduleperdays);
          setWednesdayPodcast(response.data.data[4].scheduleperdays);
          setThursdayPodcast(response.data.data[3].scheduleperdays);
          setFridaydayPodcast(response.data.data[2].scheduleperdays);
          setSaturdayPodcast(response.data.data[1].scheduleperdays);
          setSundaydayPodcast(response.data.data[0].scheduleperdays);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  useEffect(() => {
    for (let i = 0; i < UpcomingShow.length; i++) {
      if (UpcomingShow[i].post_title === day) {
        setLiveShowsData(UpcomingShow[i].scheduleperdays);
      }
    }
  }, [UpcomingShow , day]);

  useEffect( () => {
    for (let i = 0; i < UpcomingShow.length; i++) {
      if (UpcomingShow[i].post_title === tomorrowDay) {
        settomorrow(UpcomingShow[i].scheduleperdays)
      }
    }
  },[UpcomingShow])



  const state = {
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 2,
      },
      450: {
        items: 3,
      },
      767: {
        items: 4,
      },
      768: {
        items: 4,
      },
      991: {
        items: 5,
      },
      1200: {
        items: 8,
      },
    },
  };
  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="podcast">
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
              <div className="heading-h4-div">
                <h4>UPCOMING SHOWS</h4>
              </div>
              <OwlCarousel
                items={3}
                className="owl-carousel owl-theme "
                // loop
                // nav
                autoplay={false}
                dots={false}
                touchDrag={true}
                lazyLoad={true}
                responsive={state.responsive} 
                margin={10}
              >
                {(LiveShowsData.length>0)?<>{LiveShowsData.map((element) => {
                  return (
                    <>
                      {
                      ((time)<=element.show_start_date)  // true
                       ? (

                        <div className="podcast-div">
                          <div className="podcast-img effect-image-1 radious-effect radius-effct-next">
                            <img
                              src={
                                "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                element.show_image
                              }
                              alt="img-error"
                            />
                          </div>
                          <div className="podcast-box">
                            <h6>{element.show_name}</h6>
                            <p className="div-podcast">{day}</p>
                            <p className="pera pera-podcast">
                              {element.show_start_date}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}</>:<>{tomorrow.map((element) => {
                  return (
                    <>
                      {
                      ((tomorrowTime)<=element.show_start_date)  // true
                       ? (

                        <div className="podcast-div">
                          <div className="podcast-img effect-image-1 radious-effect radius-effct-next">
                            <img
                              src={
                                "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                element.show_image
                              }
                              alt="img-error"
                            />
                          </div>
                          <div className="podcast-box">
                            <h6>{element.show_name}</h6>
                            <p className="div-podcast">{day}</p>
                            <p className="pera pera-podcast">
                              {element.show_start_date}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}</>}
                
              </OwlCarousel>

              <div className="podcast-bottam">
                <div className="podcast-heading">
                  <h4>FEATURED SHOWS </h4>
                </div>

                <Tabs
                  defaultActiveKey={day}
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Monday" title="Monday">
                    <Row>
                      {MondayPodcast.map((mondaydata) => {
                        return (
                          <>
                            <Col xs={6} sm={6} md={6} lg={3}>
                              <NavLink to="/PodcastList">
                                <div className="podcast-vo-div">
                                  <div className="podcast-bo-div">
                                    <div className="pod-img">
                                      {((mondaydata.show_image === null) || (mondaydata.show_image === undefined) || (mondaydata.show_image === ""))? (
                                        <>
                                          <img
                                            src={download1}
                                            alt="img-error"
                                          />
                                        </>
                                      ) : (
                                        <img
                                          src={
                                            "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                            mondaydata.show_image
                                          }
                                          alt="img-error"
                                        />
                                      )}
                                    </div>
                                    <div className="podcast-bo-box">
                                      <h6>{mondaydata.show_name}</h6>
                                      <p>Monday</p>
                                      <p>
                                        Live At : {mondaydata.show_start_date} -{" "}
                                        {mondaydata.show_end_date}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </Tab>

                  <Tab eventKey="Tuesday" title="Tuesday">
                    <Row>
                      {ThusedayPodcast.map((Thusedaydata) => {
                        return (
                          <>
                            <Col xs={6} sm={6} md={6} lg={3}>
                              <NavLink to="/PodcastList">
                                <div className="podcast-vo-div">
                                  <div className="podcast-bo-div">
                                    <div className="pod-img">
                                      {((Thusedaydata.show_image === null) || (Thusedaydata.show_image === undefined) || (Thusedaydata.show_image === "")) ? (
                                        <>
                                          <img
                                            src={download1}
                                            alt="img-error"
                                          />
                                        </>
                                      ) : (
                                        <img
                                          src={
                                            "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                            Thusedaydata.show_image
                                          }
                                          alt="img-error"
                                        />
                                      )}
                                    </div>
                                    <div className="podcast-bo-box">
                                      <h6>{Thusedaydata.show_name}</h6>
                                      <p>Tuesday</p>
                                      <p>
                                        Live At : {Thusedaydata.show_start_date}{" "}
                                        -{Thusedaydata.show_end_date}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </Tab>

                  <Tab eventKey="Wednesday" title="Wednesday">
                    <Row>
                      {WednesdayPodcast.map((Wednesdaydata) => {
                        return (
                          <>
                            <Col xs={6} sm={6} md={6} lg={3}>
                              <NavLink to="/PodcastList">
                                <div className="podcast-vo-div">
                                  <div className="podcast-bo-div">
                                    <div className="pod-img">
                                      {((Wednesdaydata.show_image === null) || (Wednesdaydata.show_image === undefined) || (Wednesdaydata.show_image === "")) ? (
                                        <>
                                          <img
                                            src={download1}
                                            alt="img-error"
                                          />
                                        </>
                                      ) : (
                                        <img
                                          src={
                                            "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                            Wednesdaydata.show_image
                                          }
                                          alt="img-error"
                                        />
                                      )}
                                    </div>
                                    <div className="podcast-bo-box">
                                      <h6>{Wednesdaydata.show_name}</h6>
                                      <p>Wednesday</p>
                                      <p>
                                        Live At :{" "}
                                        {Wednesdaydata.show_start_date} -{" "}
                                        {Wednesdaydata.show_end_date}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </Tab>

                  <Tab eventKey="Thursday" title="Thursday">
                    <Row>
                      {ThursdayPodcast.map((Thursdaydata) => {
                        return (
                          <>
                            <Col xs={6} sm={6} md={6} lg={3}>
                              <NavLink to="/PodcastList">
                                <div className="podcast-vo-div">
                                  <div className="podcast-bo-div">
                                    <div className="pod-img">
                                      {((Thursdaydata.show_image === null) || (Thursdaydata.show_image === undefined) || (Thursdaydata.show_image === "")) ? (
                                        <>
                                          <img
                                            src={download1}
                                            alt="img-error"
                                          />
                                        </>
                                      ) : (
                                        <img
                                          src={
                                            "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                            Thursdaydata.show_image
                                          }
                                          alt="img-error"
                                        />
                                      )}
                                    </div>
                                    <div className="podcast-bo-box">
                                      <h6>{Thursdaydata.show_name}</h6>
                                      <p>Thursday</p>
                                      <p>
                                        Live At : {Thursdaydata.show_start_date}{" "}
                                        - {Thursdaydata.show_end_date}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </Tab>
                  <Tab eventKey="Friday" title="Friday">
                    <Row>
                      {FridaydayPodcast.map((Fridaydaydata) => {
                        return (
                          <>
                            <Col xs={6} sm={6} md={6} lg={3}>
                              <NavLink to="/PodcastList">
                                <div className="podcast-vo-div">
                                  <div className="podcast-bo-div">
                                    <div className="pod-img">
                                      {((Fridaydaydata.show_image === null) || (Fridaydaydata.show_image === undefined) || (Fridaydaydata.show_image === "")) ? (
                                        <>
                                          <img
                                            src={download1}
                                            alt="img-error"
                                          />
                                        </>
                                      ) : (
                                        <img
                                          src={
                                            "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                            Fridaydaydata.show_image
                                          }
                                          alt="img-error"
                                        />
                                      )}
                                    </div>
                                    <div className="podcast-bo-box">
                                      <h6>{Fridaydaydata.show_name}</h6>
                                      <p>Friday</p>
                                      <p>
                                        Live At :{" "}
                                        {Fridaydaydata.show_start_date} -{" "}
                                        {Fridaydaydata.show_end_date}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </Tab>
                  <Tab eventKey="Saturday" title="Saturday">
                    <Row>
                      {SaturdayPodcast.map((Saturdaydata) => {
                        return (
                          <>
                            <Col xs={6} sm={6} md={6} lg={3}>
                        

                              <NavLink to="/PodcastList">
                                <div className="podcast-vo-div">
                                  <div className="podcast-bo-div">
                                    <div className="pod-img">
                                      {((Saturdaydata.show_image === null) || (Saturdaydata.show_image === undefined) || (Saturdaydata.show_image === "")) ? (
                                        <>
                                          <img
                                            src={download1}
                                            alt="img-error"
                                          />
                                        </>
                                      ) : (
                                        <img
                                          src={
                                            "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                            Saturdaydata.show_image
                                          }
                                          alt="img-error"
                                        />
                                      )}
                                    </div>
                                    <div className="podcast-bo-box">
                                      <h6>{Saturdaydata.show_name}</h6>
                                      <p>Saturday</p>
                                      <p>
                                        Live At : {Saturdaydata.show_start_date}{" "}
                                        - {Saturdaydata.show_end_date}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </Tab>
                  <Tab eventKey="Sunday" title="Sunday">
                    <Row>
                      {SundayPodcast.map((Sundaydata) => {
                        return (
                          <>
                            <Col xs={6} sm={6} md={6} lg={3}>
                              <NavLink to="/PodcastList">
                                <div className="podcast-vo-div">
                                  <div className="podcast-bo-div">
                                    <div className="pod-img">
                                      {((Sundaydata.show_image === null) || (Sundaydata.show_image === undefined) || (Sundaydata.show_image === "")) ? (
                                        <>
                                          <img
                                            src={download1}
                                            alt="img-error"
                                          />
                                        </>
                                      ) : (
                                        <img
                                          src={
                                            "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                            Sundaydata.show_image
                                          }
                                          alt="img-error"
                                        />
                                      )}
                                    </div>
                                    <div className="podcast-bo-box">
                                      <h6>{Sundaydata.show_name}</h6>
                                      <p>Sunday</p>
                                      <p>
                                        Live At : {Sundaydata.show_start_date} -{" "}
                                        {Sundaydata.show_end_date}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </Tab>
                </Tabs>
              </div>
            </>
          )}
        </div>
      </section>
      <FooterSection />
    </>
  );
}
