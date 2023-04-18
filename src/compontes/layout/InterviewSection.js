import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";

export default function InterviewSection() {
  const { promiseInProgress } = usePromiseTracker();
  const [EventOneApiCall, setEventOneApiCall] = useState([]);
  const [RandomFinal, setRandomFinal] = useState([]);
  const [YelloOneApiCall, setYelloOneApiCall] = useState([]);
  const [InStOneApiCall, setInStOneApiCall] = useState([]);
  const [SoundSystemOneApiCall, setSoundSystemOneApiCall] = useState([]);
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
    const InterviewFinal = [
      ...EventOneApiCall,
      ...YelloOneApiCall,
      ...InStOneApiCall,
      ...SoundSystemOneApiCall,
    ];
    var shuffled = InterviewFinal.sort(function () {
      return 0.5 - Math.random();
    });
    var selected = shuffled.slice(0, 8);
    setRandomFinal(selected);
  }, [EventOneApiCall, YelloOneApiCall, InStOneApiCall, SoundSystemOneApiCall]);
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
    <section className="bg-color">
      <div className="inter-n-veiw">
      <div className="slider-section">
        <div className="heading-section-h5">
          <div className="news-heading ">
            <h5>Interview Section</h5>
            <NavLink to="/Interview">
              <h6>View More</h6>
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
              loop
              nav
              autoplay={true}
              dots={false}
              touchDrag={true}
              lazyLoad={true}
              responsive={state.responsive}
              margin={20}
            >
              {RandomFinal.map((element) => {
                return (
                  <>
                    <NavLink  key={"/SoundSystemViewVideo"}
                        to="/SoundSystemViewVideo"
                        state={{
                          currentvideo: element,
                          related: RandomFinal
                        }}>
                      <div className="interview-img-section-55 box">
                        <div className="img-recap">
                          <img
                            src={
                              "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                              element.feature_img
                            }
                            alt="err_img"
                          />

                          <div className="reacp-contnent-home">
                            <p className="recap-pra">{element.post_title}</p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </>
                );
              })}
            </OwlCarousel>
          </>
        )}
      </div>
      </div>
    </section>
  );
}