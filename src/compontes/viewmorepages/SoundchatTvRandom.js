import React from 'react'
// import HeaderTopSection from "../header/HeaderTopSection";
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import ReactPlayer from "react-player";
import img1 from '../../asstes/images/videoimg3.jpg'
export default function SoundchatTvRandom() {
  return (
    <>
     {/* <HeaderTopSection /> */}
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="view-more-sect-div">
          <div className="container-fluid">
            <Row>
            <Col xs={12} sm={12} md={6} lg={3}>
            <div className="view-recap-more">
                <img src={img1} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                    Chin speaks about managing Mr...
                    </p>
                    <p className="small-pra-view">Garfield 'Chin' Bourne is very well known as the...</p>
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


