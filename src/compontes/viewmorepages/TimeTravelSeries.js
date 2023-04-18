import React from 'react'
// import HeaderTopSection from "../header/HeaderTopSection";
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import ReactPlayer from "react-player";
import img1 from '../../asstes/images/videoimg2.jpg';
export default function TimeTravelSeries() {
  return (
    <>
     {/* <HeaderTopSection /> */}
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="view-more-sect-div">
          <div className="container-fluid">
          <div className="heading-section-h5">
                  <div className="news-heading bg-div-color">
                    <h5>Time Travel Series</h5>
                  </div>
                </div>
            <Row>
            <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                 <img src={img1} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                   THE CROWNING OF BRIGGY
                    </p>
                    <p className="p-pra-view">THE CROWNING OF BRIGGY</p>
                  </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
            <div className="view-recap-more">
                <img src={img1} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                    1987 - Down Beat vs Firgo Digital
                    </p>
                    <p className="p-pra-view">Replay of Down Beat vs Firgo Digital at club Amazural...</p>
                  </div>
                </div>
            </Col>
            </Row>
            </div>
            </div>
            </section>
      <FooterSection/>
    </>
  )
}


