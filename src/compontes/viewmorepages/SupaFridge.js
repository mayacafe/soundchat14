import React from 'react'
// import HeaderTopSection from "../header/HeaderTopSection";
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import ReactPlayer from "react-player";
import img1 from '../../asstes/images/videoimg2.jpg'
export default function SupaFridge() {
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
                    House Of Love 10/22/2021
                    </p>
                    <p className="small-pra-view">Supe Fridge takes the floor away with his classic...</p>
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

