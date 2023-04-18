import React, {useState, useEffect} from "react";
import { BsShare } from "react-icons/bs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import showrecap from "../../../asstes/images/interview4.jpg";
import HeaderBottamSection from "../../header/HeaderBottamSection";
import FooterSection from "../../layout/FooterSection";
import ReactPlayer from "react-player";
import axios from "axios";

export default function MawninVibesVideoOne() {
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

  const [CategoryOneRecapApiCall, setCategoryOneRecapApiCall] = useState([]);
  const [VideoApiCall, setVideoApiCall] = useState([]);

  useEffect(() => {
    axios
      .post(`https://app.soundchatradio.com:3000/api/v1/auth/recaptvlist`)
      .then((response) => {
        setCategoryOneRecapApiCall(response.data.data["Mawnin Vibes Show"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  useEffect(() => {
    axios
      .post(`https://app.soundchatradio.com:3000/api/v1/auth/recaptvlist`)
      .then((response) => {
        setVideoApiCall(response.data.data["Mawnin Vibes Show"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/2lW6LL7P0cY"
          width="100%"
          height="450px"
          volume="1"
          auto="true"
          playing="true"
          controls="true"
        />
        <div className="reacp-tv-text">
          <h3> Woman Warns against</h3>
          <div className="share-text">
            <i>
              <BsShare />
            </i>{" "}
            <span className="new-share">Share</span>{" "}
            <i>
              <BsShare />
            </i>{" "}
            <span>Share on youtube</span>
          </div>
          <p>
            Jamaican woman warns against sending under $200 to her she don't
            wnat it she is vex and upset about small amount of money sent too
            her. Hilarious A must Watch
          </p>
        </div>

        <div className="slider-section">
          <div className="LatesReacp-view">
            <h5> You May Also Like These Recap Tv Shows</h5>
          </div>

          <OwlCarousel
            items={6}
            className="owl-carousel owl-theme "
            // loop
            nav
            autoplay={true}
            dots={false}
            touchDrag={true}
            lazyLoad={true}
            responsive={state.responsive} // add this line
            margin={20}
          >
              {CategoryOneRecapApiCall.map((data) => {
                  return (
                    <>
                    {/* <NavLink to="/MawninVibesVideoOne"> */}
                      <div className="interview-img-section">
                        <div className="img-recap">
                          <img src={showrecap} alt="" />
                          <div className="recap-one-pra">
                            <p className="recap-p-div">{data.post_excerpt}</p>
                          </div>
                          <div className="reacp-contnent recap-tow-sec">
                            <p className="recap-pra">{data.post_title}</p>
                          </div>
                        </div>
                      </div>
                      {/* </NavLink> */}
                    </>
                  );
                })}
          </OwlCarousel>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
