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
                    <li>
                      <a href="#"> USA</a>
                    </li>
                    <li>
                      <a href="#">(718) 554-8598</a>
                    </li>
                    <li>
                      <a href="#">UK</a>
                    </li>
                    <li>
                      <a href="#">44 208-068-0507</a>
                    </li>
                    <li>
                      <a href="#">Canada</a>
                    </li>
                    <li>
                      <a href="#">(647) 484-7826</a>
                    </li>
                    <li>
                      <a href="#">Listen By Phone</a>
                    </li>
                    <li>
                      <a href="#">(720) 721-1428</a>
                    </li>
                    <li>
                      <a href="#">Whatsapp</a>
                    </li>
                    <li>
                      <a href="#">(347) 757-9865</a>
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
                    <a href="/#">
                      <i> <ImFacebook /></i>
                      <span>Facebook</span>
                    </a>
                    <a href="/#">
                      <i>
                        <ImTwitter/>
                      
                      </i>
                      <span>Twitter</span>
                    </a>
                    <a href="/#">
                      <i>
                        <ImYoutube/>
                      </i>
                      <span>Youtube</span>
                    </a>
                    <a href="/#">
                      <i>
                        <ImInstagram/>
                      </i>
                      <span>Instagram</span>
                    </a>
                    <a href="/#">
                      <i>
                        <ImWhatsapp/>
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
                        <img src={img1} alt="" />
                        &nbsp; &nbsp;
                        <img src={img2} alt="" />
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
                    © 2022 Irish & Chin Ltd. | All rights reserved. I Designed
                    by Broadlink.
                    <NavLink to="/Contact"> <ArrowForwardIosIcon />CONTACT US</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
