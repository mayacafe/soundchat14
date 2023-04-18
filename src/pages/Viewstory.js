import React, { useState, useEffect } from "react";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import FooterSection from "../compontes/layout/FooterSection";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiPlay } from "react-icons/bi";
import int01 from "../asstes/images/int01.jpg";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BsFillSquareFill } from "react-icons/bs";
import showrecap from "../asstes/images/shop6.jpg";
import showrecap2 from "../asstes/images/shop3.jpg";
import showrecap3 from "../asstes/images/shop1.jpg";
import showrecap4 from "../asstes/images/adv2.jpg";
import showrecap5 from "../asstes/images/Sherry.jpg";
function Viewstory() {
 
  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="view-story">
            
        </div>
      </section>
      <FooterSection />
    </>
  );
}
export default Viewstory;
