import React from "react";
// import HeaderTopSection from "../header/HeaderTopSection";
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import ReactPlayer from "react-player";
import img1 from "../../asstes/images/videoimg4.jpg";
export default function TalkAnythinkFri() {
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
                  <div className="recap-seaven">
                    <p> <span className="recap-seaven-h6-div">
                        IS BATTERY RAPE?
                      </span>
                      <br />
                      LADY ANN AND AJAX
                    </p>
                  </div>
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">IS BATTERY RAPE?</p>
                    <p className="small-pra-view">
                      IS BATTERY (Jamaican to describe multiple men...)
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
