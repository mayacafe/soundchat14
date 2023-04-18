import React from "react";
import HeaderTopSection from "../header/HeaderTopSection";
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import int01 from "../../asstes/images/podcast7.png";
import int02 from "../../asstes/images/podcast6.png";
import int03 from "../../asstes/images/podcast5.png";
import int04 from "../../asstes/images/podcast4.png";
import int05 from "../../asstes/images/podcast3.png";
import int06 from "../../asstes/images/podcast2.png";
import img1 from "../../asstes/images/int01.jpg";
import img2 from "../../asstes/images/int02.jpg";
import img3 from "../../asstes/images/int03.jpg";
import img4 from "../../asstes/images/int04.jpg";
import img5 from "../../asstes/images/int05.jpg";
export default function InStudio() {
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
                  <img src={img4} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={img3} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={int01} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={int02} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={int03} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={int04} alt="" />
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
                  <img src={int05} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={int06} alt="" />
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
                  <img src={img1} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
                    </p>
                    {/* <p className="small-pra-view">2021-12-20 SoundChat Talk Show Monday</p> */}
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <div className="view-recap-more">
                  <img src={img2} alt="" />
                  <div className="recap-view-more">
                    <p className="recap-pra-view-more">
                      2021-12-20 SoundChat Talk Show...
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

