import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../asstes/images/logo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import { NavLink } from "react-router-dom";
import scannerfooter from "../../asstes/images/scannerfooter.jpeg";
import img1 from "../../asstes/images/Google_Play_Store_badge_EN.svg.webp";
import img2 from "../../asstes/images/Download_on_the_App_Store_Badge.svg.webp";

export default function FooterSection() {
  return (
    <>
      <footer class="footer-section">
        <div class="container-fluid">
          <div class="footer-content">
            <div class="row">
              <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <img src={logo} class="img-fluid" alt="err" />
                  </div>
                </div>
              </div>
              <div class="col-xl-3  col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="foot-new-t">
                  <div class="footer-widget">
                    <div class="footer-widget-heading">
                      <h3>REQUEST LINES</h3>
                    </div>
                    <ul>
                      <li>USA</li>
                      <li>
                        <a href="tel://(718) 554-8598">(718) 554-8598</a>
                      </li>
                      <li>UK</li>
                      <li>
                        <a href="tel://44 208-068-0507">44 208-068-0507</a>
                      </li>
                      <li>Canada</li>
                      <li>
                        <a href="tel://(647) 484-7826">(647) 484-7826</a>
                      </li>
                      <li>Listen By Phone</li>
                      <li>
                        <a href="tel://(720) 721-1428">(720) 721-1428</a>
                      </li>
                      <li>Whatsapp</li>
                      <li>
                        <a
                          href="https://api.whatsapp.com/send?phone=%20347-757-9865"
                          target="_blank"
                        >
                          (347) 757-9865
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>FOLLOW US</h3>
                  </div>
                  <div class="footer-social-icon">
                    <a
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/irishandchin",
                          "_blank"
                        );
                      }}
                    >
                      <i>
                        {" "}
                        <ImFacebook />
                      </i>
                      <span>Facebook</span>
                    </a>
                    <a
                      onClick={() => {
                        window.open(
                          "https://twitter.com/irishandchin",
                          "_blank"
                        );
                      }}
                    >
                      <i>
                        <ImTwitter />
                      </i>
                      <span>Twitter</span>
                    </a>
                    <a
                      onClick={() => {
                        window.open(
                          "https://www.youtube.com/channel/UC_JmuNpM4M4wqxoUeBSOMJw/videos",
                          "_blank"
                        );
                      }}
                    >
                      <i>
                        <ImYoutube />
                      </i>
                      <span>Youtube</span>
                    </a>
                    <a
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/irishandchin/",
                          "_blank"
                        );
                      }}
                    >
                      <i>
                        <ImInstagram />
                      </i>
                      <span>Instagram</span>
                    </a>

                    <a
                      onClick={() => {
                        window.open(
                          " https://api.whatsapp.com/send?phone=%20347-757-9865",
                          "_blank"
                        );
                      }}
                    >
                      <i>
                        <ImWhatsapp />
                      </i>
                      <span>Whatsapp</span>
                    </a>
                  </div>
                  {/* <ul>
                    <li>
                      <a href="#"> USA</a>
                    </li>
                    <li>
                      <a href="#">(718) 554-8598</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div class="col-xl-4  col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>DOWNLOAD APP</h3>
                  </div>
                  <div class="footer-text">
                    <div className="footer-new-head">
                      <div className="sc-div">
                        <img src={scannerfooter} alt="" />
                      </div>
                      <div className="button-div">
                        <a
                          onClick={() => {
                            window.open(
                              "https://play.google.com/store/apps/details?id=com.soundchatradio.broadlink",

                              "_blank"
                            );
                          }}
                        >
                          <img src={img1} alt="" />
                        </a>
                        &nbsp; &nbsp;
                        <a
                          onClick={() => {
                            window.open(
                              "https://apps.apple.com/us/app/sound-chat-radio/id1585082754",
                              "_blank"
                            );
                          }}
                        >
                          <img src={img2} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="copyright-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12 col-lg-12  text-lg-left">
              <div class="copyright-text">
                <p>
                  © 2022 Irish & Chin Ltd. | All rights reserved. I Designed by
                  Broadlink.
                  <NavLink to="/Contact">
                    {" "}
                    <ArrowForwardIosIcon />
                    CONTACT US
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
