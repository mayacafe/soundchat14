import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import AudioPlayer from "react-h5-audio-player";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import FooterSection from "../compontes/layout/FooterSection";
import { ThreeDots } from "react-loader-spinner";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import int01 from "../asstes/images/int01.jpg";
import "react-h5-audio-player/lib/styles.css";
//import { BsFillSquareFill } from "react-icons/bs";

function ListenSection() {
  const day = moment().tz("America/Detroit").format("dddd");
  const time = moment().tz("America/Detroit").format("HH:mm");
  const { promiseInProgress } = usePromiseTracker();
  const [ListenSlider, setListenSlider] = useState([]);
  const [LiveShow, setLiveShow] = useState([]);
  const [LiveShowsData, setLiveShowsData] = useState([]);
  const [ShowTimeData, setShowTimeData] = useState([]);
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
  useEffect(() => {
    trackPromise(
      axios
        .post(`https://app.soundchatradio.com:3000/api/v1/auth/homeslider`, {
          slider_id: "1",
        })
        .then((response) => {
          setListenSlider(response.data.data);
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
          `https://app.soundchatradio.com:3000/api/v1/auth/listshowschedule`
        )
        .then((response) => {
          //console.log(response.data);
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
        for (let j = 0; j < LiveShow[i].scheduleperdays.length; j++) {
          let starttime =
            LiveShow[i].scheduleperdays[j].show_start_date.split(":");
          let endtime = LiveShow[i].scheduleperdays[j].show_end_date.split(":");
          let currenttime = time.split(":");
          console.log(starttime[0], endtime[0], currenttime[0], time, "sdghfg");
          if (
            parseInt(starttime[0]) <= parseInt(currenttime[0]) &&
            parseInt(endtime[0]) >= parseInt(currenttime[0])
          ) {
            console.log("okay");
            setShowTimeData({
              show_name: LiveShow[i].scheduleperdays[j].show_name,
              show_audio_url: LiveShow[i].scheduleperdays[j].show_audio_url,
              show_image: LiveShow[i].scheduleperdays[j].show_image,
            });
          }
        }
      }
    }
  }, [LiveShow]);
  // console.log(ShowTimeData, "show");

  //
  const [waveClass, setwaveClass] = useState("box");
  const [LiveAudio, setLiveAudio] = useState([]);
  useEffect(() => {
    trackPromise(
      axios
        .post(`https://app.soundchatradio.com:3000/api/v1/auth/listlivecontent`)
        .then((response) => {
          setLiveAudio(response.data.data[1]);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  // const [playtitle, setPlaytitle] = useState("");
  // const [playdescription, setPlayDescription] = useState("");
  // const [playaudiolink, setPlayaudiolink] = useState("");
  // function handleListen(details) {
  //   console.log(details, "kk");
  //   setPlaytitle(details.show_name);
  //   setPlayDescription(details.show_description);
  //   setPlayaudiolink(details.show_audio_url);
  // }
  // console.log(playaudiolink, "playaudiolink");
  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="container-fluid">
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
              <div className="listen-showw">
                <div className="listen-section-div">
                  <Row>
                    <Col lg={8} md={6}>
                      <div className="slide-fed-new">
                        <Fade>
                          {ListenSlider.map((element) => {
                            return (
                              <>
                                <div className="each-fade">
                                  <div className="fade-in-new">
                                    <img
                                      src={
                                        "https://app.soundchatradio.com/soundradiobackend/images/" +
                                        element.img
                                      }
                                      alt="slide_err"
                                    />
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </Fade>
                      </div>
                    </Col>
                    <Col lg={4} md={6}>
                      <div className="listen-div">
                        <Row>
                          <Col sm={12} md={12} lg={12}>
                            <div className="listen-img-div">
                              <img
                                src={
                                  "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                  ShowTimeData.show_image
                                }
                                alt="img-error"
                              />

                              <div className="listen-new-item">
                                <div className="right-section-listen">
                                  <h6>{ShowTimeData.show_name}</h6>
                                  <p>soundchat Radio</p>

                                  <div className="same-value-listen">
                                    <AudioPlayer
                                      // autoPlay
                                      showJumpControls={false}
                                      src={LiveAudio.livelink}
                                      onPause={(e) => {
                                        console.log("onPlay");
                                        if (waveClass === "box active") {
                                          setwaveClass("box");
                                        }
                                      }}
                                      onPlay={(e) => {
                                        console.log("onPlay");
                                        if (waveClass === "box") {
                                          setwaveClass("box active");
                                        }
                                      }}
                                    />
                                    <div className="box-container flex">
                                      <div
                                        className={`${waveClass} box1`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box2`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box3`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box4`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box5`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box6`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box7`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box2`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box3`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box4`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box5`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box6`}
                                      ></div>
                                      <div
                                        className={`${waveClass} box7`}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>

                          {/* <div className="listen-new-item">
                              <div className="right-section-listen">
                                <h6>{playtitle}</h6>

                                <p>{playdescription}</p>
                                <div className="listen-icon-div">
                                  <AudioPlayer
                                    autoPlay
                                    src={playaudiolink}
                                    onPlay={(e) => console.log("onPlay")}
                                  />
                                  <span className="listion-icon ">
                                  <BsFillSquareFill />
                                </span>
                                <span className="listion-icon-li ">
                                  <BiPlay />
                                </span>
                                <span className="listion-icon icon-lis lis-font">
                                  <BsFillVolumeUpFill />
                                </span>
                                </div>
                              </div>
                            </div> */}
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="heading-section-lis">
                  <h5>Upcoming Shows</h5>
                </div>
                <OwlCarousel
                  items={6}
                  className="owl-carousel owl-theme "
                  // loop
                  // nav
                  // autoplay={true}
                  dots={false}
                  touchDrag={true}
                  lazyLoad={true}
                  responsive={state.responsive} // add this line
                  margin={20}
                >
                  {LiveShowsData.map((element) => {
                    return (
                      <>
                        <NavLink to="/PodcastList">
                          <div
                            className="img-recap"
                            // onClick={() => {
                            //   handleListen(element);
                            // }}
                          >
                            <img
                              src={
                                "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                                element.show_image
                              }
                              alt="img-error"
                            />
                            <div className="reacp-listen">
                              <h6 className="recap-listenn-pra">
                                {element.show_name}
                              </h6>
                              <p className="listen-first">{day}</p>
                              <p className="listen-second">
                                {element.show_start_date}
                              </p>
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
      </section>
      <FooterSection />
    </>
  );
}
export default ListenSection;
