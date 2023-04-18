import React from "react";
import HeaderBottamSection from "../../header/HeaderBottamSection";
import HeaderTopSection from "../../header/HeaderTopSection";
import FooterSection from "../../layout/FooterSection";
import { FaRegPlayCircle } from "react-icons/fa";
import imgone from "../../../asstes/images/thumb_f1a52how-to-make-money-from-podcasts-.jpg";
import video1 from "../../../asstes/video/production ID_4916813.mp4";
import ReactPlayer from "react-player";
import copy1 from "../../../asstes/images/copy1.jpg";
import copy2 from "../../../asstes/images/copy3.jpg";
import copy3 from "../../../asstes/images/video1.jpg";
import copy4 from "../../../asstes/images/copy7.jpg";
import copy5 from "../../../asstes/images/copy6.jpg";
import copy7 from "../../../asstes/images/copy5.jpg";
import copy8 from "../../../asstes/images/copy8.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function SoundChatTalkShowVideo() {
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
      <HeaderTopSection />
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="recap-div-video">
          <div className="recap-div">
            <div className="video-player-div">
              <ReactPlayer
                className="player-div-div"
                url={video1}
                width="100%"
                height="400px"
                playing
                //   controls
                playIcon={""}
                light={imgone}
              />
              <div className="recap-video-heading">
                <button className="recap-div-p">TRENDING</button>
                <h1 className="recap-video-h1">
                  Woman Warns against sending $200 to her
                </h1>
                <p className="recap-video-pra">
                  Jamaican woman warns against sending under $200 to her she
                  don't wnat it she is vex and upset about small amount of money
                  sent too her. Hilarious A must Watch
                </p>
                <div className="video-recap-btn-div">
                  <div className="recap-w-div">
                    <span className="recap-icon-w-div">
                      <FaRegPlayCircle />
                    </span>
                    <button> &nbsp; &nbsp;WATCH NOW</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-recap-seaven">
              <div className="heading-section-h5">
                <div className="news-heading bg-div-color">
                  <h5>SoundChat Talk Show</h5>
                </div>
              </div>
              <OwlCarousel
                items={6}
                className=" podcast-slider owl-carousel owl-theme "
                // loop
                nav
                autoplay={true}
                dots={false}
                touchDrag={true}
                lazyLoad={true}
                responsive={state.responsive} // add this line
                margin={20}
              >
                <div className="video-reacp-five">
                  <div className="video-recap-img">
                    <img src={copy1} alt="" />
                  </div>
                  <div className="recap-seaven-video-re">
                    <p>
                      <span className="recap-seaven-h6">
                        RIHANNA'S DRESS CODE
                      </span>
                      <br />
                      WAS THE RIGHT "FIT" OR <br />
                      WAS IT INAPPROPRIATE
                    </p>
                  </div>
                  <div className="reacp-contnent-video-seaven-rec ">
                    <p className="recap-pra-video-seaven">THE RIGHT "FIT"</p>
                  </div>
                </div>
                <div className="video-reacp-five">
                  <div className="video-recap-img">
                    <img src={copy1} alt="" />
                  </div>
                  <div className="recap-seaven-div-rec ">
                    <p>
                      <span className="recap-seaven-h6">
                        POP STAR RIHANNA
                      </span>
                      <br />
                      A NATIONAL HERO AT <br />
                      33 YEARS OLD
                    </p>
                  </div>
                  <div className="reacp-contnent-video-seaven-rec">
                    <p className="recap-pra-video-seaven">NATIONAL HERO</p>
                  </div>
                </div>
                <div className="video-reacp-five">
                  <div className="video-recap-img">
                    <img src={copy2} alt="" />
                  </div>
                  <div className="recap-seaven-div-seaven-rec-sev ">
                    <p>
                      PRIME MINISTER
                      <br />
                      ANDREW HOLNESS
                      <br />
                      FAVORSTHE <br />
                      <span className="recap-seaven-h6">DEATH PENALTY</span>
                    </p>
                  </div>
                  <div className="reacp-contnent-video-seaven-rec">
                    <p className="recap-pra-video-seaven">DEATH PENALTY</p>
                  </div>
                </div>
                <div className="video-reacp-five">
                  <div className="video-recap-img">
                    <img src={copy4} alt="" />
                  </div>
                  <div className="recap-seaven-div-one-rec">
                    <p>
                      JAMAICAN KIDS NOT ALLOWED <br />
                      TO SPEAK PATOIS (PATWA) AT HOME?
                    </p>
                  </div>
                  <div className="reacp-contnent-video-seaven-rec">
                    <p className="recap-pra-video-seaven">No PATWA AT</p>
                  </div>
                </div>
                <div className="video-reacp-five">
                  <div className="video-recap-img">
                    <img src={copy5} alt="" />
                  </div>
                  <div className="recap-seaven-div-one-rec ">
                    <p>
                      QUEEN OF DANCEHALL CHOOSES <br />
                      GAY PRIDE
                    </p>
                  </div>
                  <div className="reacp-contnent-video-seaven-rec">
                    <p className="recap-pra-video-seaven">SPICE CHOOSES GAY</p>
                  </div>
                </div>
                <div className="video-reacp-five">
                  <div className="video-recap-img">
                    <img src={copy3} alt="" />
                  </div>
                  <div className="recap-seaven-div-one-rec">
                    <p>
                      JAMAICA'S JACKET CULTURE <br />
                    </p>
                  </div>
                  <div className="reacp-contnent-video-seaven-rec">
                    <p className="recap-pra-video-seaven">Jamaica's Culture</p>
                  </div>
                </div>
                <div className="video-reacp-five">
                  <div className="video-recap-img">
                    <img src={copy7} alt="" />
                  </div>
                  <div className="recap-seaven-div-one-rec">
                    <p>
                      LILA IKE & JADA KINGDOM <br />
                      ANNOUNCES THAT THEY ARY GAY
                    </p>
                  </div>
                  <div className="reacp-contnent-video-seaven-rec">
                    <p className="recap-pra-video-seaven">THEY ARY GAY</p>
                  </div>
                </div>
                <div className="video-reacp-five">
                  <div className="video-recap-img">
                    <img src={copy8} alt="" />
                  </div>
                  <div className="recap-seaven-div-one-one-rec">
                    <p>
                      COVID "VACCINATED" VENUES, <br /> IS IT SAFE?
                    </p>
                  </div>
                  <div className="reacp-contnent-video-seaven-rec">
                    <p className="recap-pra-video-seaven">COVID 19 VENU... </p>
                  </div>
                </div>
                <div className="video-reacp-five">
                  <div className="video-recap-img">
                    <img src={copy8} alt="" />
                  </div>
                  <div className="recap-seaven-div-one-one-div-rec ">
                    <p>
                      JAMAICA GIVING AWAY
                      <br /> KFC FOR VACCINE
                    </p>
                  </div>
                  <div className="reacp-contnent-video-seaven-rec">
                    <p className="recap-pra-video-seaven">JAMAICA GIVING.. </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
