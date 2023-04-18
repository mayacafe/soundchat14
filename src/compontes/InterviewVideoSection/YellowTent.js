import React from "react";
import HeaderTopSection from "../header/HeaderTopSection";
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
// import int01 from "../../asstes/images/podcast7.png";
// import int02 from "../../asstes/images/podcast6.png";
// import int03 from "../../asstes/images/podcast5.png";
// import int04 from "../../asstes/images/podcast4.png";
// import int05 from "../../asstes/images/podcast3.png";
// import int06 from "../../asstes/images/podcast2.png";
import interview4 from "../../asstes/images/shen-yen.jpg";
export default function YellowTent() {
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
                  <img src={interview4} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={interview4} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={interview4} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={interview4} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                    {/* <small className="small-pra-view">2021-12-20 SoundChat Talk Show Monday</small> */}
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={interview4} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={interview4} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={interview4} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={interview4} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                    {/* <small className="small-pra-view">2021-12-20 SoundChat Talk Show Monday</small> */}
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
