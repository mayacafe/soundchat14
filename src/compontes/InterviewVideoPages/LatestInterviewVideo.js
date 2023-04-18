import React from 'react'
import HeaderBottamSection from "../header/HeaderBottamSection";
import HeaderTopSection from "../header/HeaderTopSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import FooterSection from "../layout/FooterSection";
// import imgone from "../../asstes/images/interview4.jpg";
import video1 from "../../asstes/video/production ID_4916813.mp4";
import ReactPlayer from "react-player";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import inte1 from "../../asstes/images/Bugle-2.jpg";
import inte2 from "../../asstes/images/Bugle-4.jpg";
import inimg1 from "../../asstes/images/podcast1.png";
import inimg2 from "../../asstes/images/podcast9.png";
import inimg3 from "../../asstes/images/podcast10.png";
import { BsFillPlayFill} from "react-icons/bs";
import showrecap from "../../asstes/images/interview4.jpg";
import interview5 from "../../asstes/images/Cutty-Ranks-e1549856872158.jpg";
import interview4 from "../../asstes/images/shen-yen.jpg";
import interview6 from "../../asstes/images/interview01.jpg";

export default function LatestInterviewVideo() {
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
      {/* <HeaderTopSection /> */}
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="recap-div">
        <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
           < div className="slider-new">

              <div className="video-slider">
              <img src={interview5 } alt="" />
              </div>
         
            <div className="recap-video-heading">
            {/* <button className="recap-div-p">TRENDING</button> */}
            <div className="video-recap-btn-div">
              <span className="recap-icon-w-div">
                <BsFillPlayFill />
              </span>
              
              <button> &nbsp; &nbsp;WATCH NOW</button>
            
            </div>
            <h1 className="recap-video-h1">
              {/* Woman Warns against <br /> sending $200 to her */}
              OMARI BANKS INTERVIEW JAMROCK CRUISE
            </h1>
            <p className="recap-video-pra">
              Jamaican woman warns against sending under $200 to her she don't
              wnat it she is vex and upset about small amount of money sent too
              her. Hilarious A must Watch
            </p>
          </div>
          </div>
          </SwiperSlide>
            <SwiperSlide>
           < div className="slider-new">

              <div className="video-slider">
              <img src={interview4 } alt="" />
              </div>
         
            <div className="recap-video-heading">
            {/* <button className="recap-div-p">TRENDING</button> */}
            <div className="video-recap-btn-div">
              <span className="recap-icon-w-div">
                <BsFillPlayFill />
              </span>
              <button> &nbsp; &nbsp;WATCH NOW</button>
            </div>
            <h1 className="recap-video-h1">
              Woman Warns against <br /> sending $200 to her
            </h1>
            <p className="recap-video-pra">
              Jamaican woman warns against sending under $200 to her she don't
              wnat it she is vex and upset about small amount of money sent too
              her. Hilarious A must Watch
            </p>
          </div>
          </div>
          </SwiperSlide>
            <SwiperSlide>
           < div className="slider-new">

              <div className="video-slider">
              <img src={interview6} alt="" />
              </div>
         
            <div className="recap-video-heading">
            {/* <button className="recap-div-p">TRENDING</button> */}
            <div className="video-recap-btn-div">
              <span className="recap-icon-w-div">
                <BsFillPlayFill />
              </span>
              <button> &nbsp; &nbsp;WATCH NOW</button>
            </div>
            <h1 className="recap-video-h1">
              Woman Warns against <br /> sending $200 to her
            </h1>
            <p className="recap-video-pra">
              Jamaican woman warns against sending under $200 to her she don't
              wnat it she is vex and upset about small amount of money sent too
              her. Hilarious A must Watch
            </p>
          </div>
          </div>
          </SwiperSlide>
        
          </Swiper>

        </div>

        <div className="slider-section">
          <div className="heading-h5-div">
            <h5>YOU MAY ALSO LIKE THESE INTERVIEW</h5>
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
            <div className="img-recap">
              <img src={showrecap} alt="" />
              <div className="reacp-contnent">
                <p className="recap-pra">
                  Woman Warns against sending $200 to her
                </p>
              </div>
            </div>
            <div className="img-recap">
              <img src={inte1} alt="" />
              <div className="reacp-contnent">
                <p className="recap-pra">
                  Man buys car for Ex- Wife
                  but delivers to wife
                </p>
              </div>
            </div>
            <div className="img-recap">
              <img src={inte2} alt="" />
              <div className="reacp-contnent">
                <p className="recap-pra">
                  Chin speaks about managing Mr. Vegas
                </p>
              </div>
            </div>
            <div className="img-recap">
              <img src={inimg1} alt="" />
              <div className="reacp-contnent">
                <p className="recap-pra">
                  THE CORWNING OF BRIGGY.
                </p>
              </div>
            </div>
            <div className="img-recap">
              <img src={inimg2} alt="" />
              <div className="reacp-contnent">
                <p className="recap-pra">
                  1987-Down Beat vs Firgo
                  Digital
                </p>
              </div>
            </div>
            <div className="img-recap">
              <img src={inimg3} alt="" />
              <div className="reacp-contnent">
                <p className="recap-pra">
                  2021-12-20 SoundChat Talk
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <FooterSection />
    </>
  )
}
