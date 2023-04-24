import React, { useState, useEffect } from "react";
import video from "../../asstes/video/production ID_5156816.mp4";
export default function HeaderTopSection() {

  return (
    <div className="header-top">
      <div className="header-top-wrapper d-flex">
        <div className="header-section-one">
          <div className="video-section">
            <video className="video-div" autoPlay={true} loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      
      </div>
    </div>
  );  
}