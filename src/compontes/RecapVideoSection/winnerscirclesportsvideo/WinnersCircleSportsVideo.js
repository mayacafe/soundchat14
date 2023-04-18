import React from 'react'
import HeaderBottamSection from '../../header/HeaderBottamSection'
import HeaderTopSection from '../../header/HeaderTopSection'
import FooterSection from '../../layout/FooterSection'
import { FaRegPlayCircle } from 'react-icons/fa';
import imgone from "../../../asstes/images/thumb_f1a52how-to-make-money-from-podcasts-.jpg";
import video1 from "../../../asstes/video/production ID_4916813.mp4";
import ReactPlayer from "react-player";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img2 from "../../../asstes/images/videoimg2.jpg";
export default function WinnersCircleSportsVideo() {
  return (
   <>
   <HeaderTopSection/>
   <HeaderBottamSection/>
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
                      Woman Warns against  sending $200 to her
                    </h1>
                    <p className="recap-video-pra">
                      Jamaican woman warns against sending under $200 to her she
                      don't wnat it
                      she is vex and upset about small amount of money sent too
                      her. Hilarious A must Watch
                    </p>
                    <div className="video-recap-btn-div">
                  <div className="recap-w-div">
                  <span className="recap-icon-w-div"><FaRegPlayCircle/></span>    <button> &nbsp; &nbsp;WATCH NOW</button>
                  </div>
                     </div>
                  </div>
            </div>

            <div className="div-recap-six">
                <div className="heading-section-h5">
                  <div className="news-heading bg-div-color">
                    <h5>Winners Circle Sports</h5>
                    {/* <NavLink to="/WinnerCircle">
                    <h6>View More</h6>
                    </NavLink> */}
                  </div>
                </div>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={2}>
                    <div className="img-recap">
                      {/* <NavLink to="/WinnersCircleSportsVideo"> */}
                      <img src={img2} alt="" />
                      {/* </NavLink> */}
                      <div className="reacp-contnent">
                        <p className="recap-pra">
                          2022-02-21 <br /> Winners Circle
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={2}>
                    <div className="img-recap">
                      <img src={img2} alt="" />
                      <div className="reacp-contnent">
                        <p className="recap-pra">
                          2022-02-21 <br /> Winners Circle
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={2}>
                    <div className="img-recap">
                      <img src={img2} alt="" />
                      <div className="reacp-contnent">
                        <p className="recap-pra">
                          2022-02-21 <br /> Winners Circle
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={2}>
                    <div className="img-recap">
                      <img src={img2} alt="" />
                      <div className="reacp-contnent">
                        <p className="recap-pra">
                          2022-02-21 <br /> Winners Circle
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={2}>
                    <div className="img-recap">
                      <img src={img2} alt="" />
                      <div className="reacp-contnent">
                        <p className="recap-pra">
                          2022-02-21 <br /> Winners Circle
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={2}>
                    <div className="img-recap">
                      <img src={img2} alt="" />
                      <div className="reacp-contnent">
                        <p className="recap-pra">
                          2022-02-21 <br /> Winners Circle
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            </div>
            </section>
   <FooterSection/>
   </>
  )
}
