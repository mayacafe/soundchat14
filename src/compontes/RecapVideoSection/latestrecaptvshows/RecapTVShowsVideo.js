import React, { useState, useEffect } from "react";
import HeaderBottamSection from "../../header/HeaderBottamSection";
import ReactPlayer from "react-player";
import FooterSection from "../../layout/FooterSection";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsShare } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function RecapTVShowsVideo() {
  const data = useLocation()
  // console.log(data, "ok")
  const [CurrentVideo, setCurrentVideo] = useState({})
  const [RelatedVideo, setRelatedVideo] = useState([])
  const [LiveVideo, setLiveVideo] = useState([])
  useEffect( () =>{
    setLiveVideo(data.state)
    setCurrentVideo(data.state.currentvideo)
    setRelatedVideo(data.state.related)
  }, [data])
  // console.log(LiveVideo, "hello")
  // console.log(CurrentVideo, "hiii")
  // console.log(RelatedVideo, "world")

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

  const [VedioCall, setVedioCall] = useState([]);
  useEffect(() => {
    axios
      .post(`https://app.soundchatradio.com:3000/api/v1/auth/latestcontentlist`)
      .then((response) => {
        setVedioCall(response.data.data.recaptv);
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
          url={CurrentVideo.video_url}
          width="100%"
          height="450px"
          volume="1"
          auto="true"
          playing="true"
          controls="true"
        />
        <div className="reacp-tv-text">
          <h3>{CurrentVideo.post_title}</h3>
          <div className="share-text">
            <i>
              <BsShare />
            </i>
            <span className="new-share">Share</span>
            <i>
              <BsShare />
            </i>
            <span>Share on youtube</span>
          </div>
          <p>
            {CurrentVideo.post_excerpt}
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
            responsive={state.responsive} 
            margin={20}
          >
            {RelatedVideo.map((element) => {
              return (
                <>
                  <div className="img-recap" onClick={()=>{
                      setCurrentVideo(element)
                    }}>
                    <img
                      src={
                        "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                        element.feature_img
                      }
                      alt=""
                    />
                    <div className="reacp-contnent new-1">
                      <p className="recap-pra">{element.post_title}</p>
                    </div>
                  </div>
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
