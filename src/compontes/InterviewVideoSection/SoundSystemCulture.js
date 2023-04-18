import React, { useState, useEffect } from "react";
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink, useLocation } from "react-router-dom";
export default function SoundSystemCulture() {
  const data = useLocation();
  const [RelatedVideo, setRelatedVideo] = useState([]);
  useEffect(() => {
    setRelatedVideo(data.state.related);
  }, [data]);
  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="view-more-sect-div">
          <div className="container-fluid">
            <Row>
              {RelatedVideo.map((element) => {
                return (
                  <>
                    <Col xs={12} sm={12} md={6} lg={3}>
                      <NavLink
                        key={"/SoundSystemViewVideo"}
                        to="/SoundSystemViewVideo"
                        state={{ currentvideo: element, related: RelatedVideo }}
                      >
                        <div className="view-recap-more">
                          <img
                            src={
                              "https://app.soundchatradio.com/soundradiobackend/images/interviews/" +
                              element.feature_img
                            }
                            alt=""
                          />
                          <div className="recap-view-more">
                            <p className="recap-pra-view-more">
                              {element.post_title}
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
