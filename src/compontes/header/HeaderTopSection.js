import React, { useState, useEffect } from "react";
import axios from "axios";
import AudioPlayer, { RHAP_UI }  from "react-h5-audio-player";
import video from "../../asstes/video/production ID_5156816.mp4";


export default function HeaderTopSection(props) {
  const [LiveAudio, setLiveAudio] = useState([]);
  const [waveClass, setwaveClass] = useState("box");
  const [audioStatus, setaudioStatus] = useState(false);
// console.log(props.props("rashmilodhi"))

  useEffect(() => {
    // trackPromise(
    axios
      .post(`https://app.soundchatradio.com:3000/api/v1/auth/listlivecontent`)
      .then((response) => {
        setLiveAudio(response.data.data[1]);
      })
      .catch((error) => {
        console.log(error);
      });
    // );
  }, []);
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
        <div className="header-section-tow">
          <div className="d-flex right-div-section">
            <div className="logo-soundchat">
              <img
                src="https://soundchatradio.com/wp-content/uploads/2018/10/logo-soundchat-radioSmall.png"
                alt=""
              />
            </div>
            <div className="logo-text-heading">
              <h6 className="header-new-bottom-new">{LiveAudio.title}</h6>
              <div className="main-audio-live-content">
                <AudioPlayer
                
                  src={LiveAudio.livelink}
                  autoPlay={Boolean(audioStatus)}
                  customAdditionalControls={[]}
                  customVolumeControls={[]} 
                  showJumpControls={false}
                  showFilledProgress={false}
                  onPause={(e) => {console.log("onPlay")
                  props.callback("pause")
                  localStorage.setItem('audioplayer',false)
                  localStorage.setItem('videoplayer',true)
                  if(waveClass==='box active'){
                    setwaveClass("box")
                  }}
                }
                  onPlay={(e) => {
                    props.callback("play")
                    localStorage.setItem('audioplayer',true)
                    localStorage.setItem('videoplayer',false)

                    console.log("onPlay")
                if(waveClass==='box'){
                  setwaveClass("box active")
                }}
              }
                />
                <div className="box-container flex">
                  <div className={`${waveClass} box1`}></div>
                  <div className={`${waveClass} box2`}></div>
                  <div className={`${waveClass} box3`}></div>
                  <div className={`${waveClass} box4`}></div>
                  <div className={`${waveClass} box5`}></div>
                  <div className={`${waveClass} box6`}></div>
                  <div className={`${waveClass} box7`}></div>
                  <div className={`${waveClass} box2`}></div>
                  <div className={`${waveClass} box3`}></div>
                  <div className={`${waveClass} box4`}></div>
                  <div className={`${waveClass} box5`}></div>
                  <div className={`${waveClass} box6`}></div>
                  <div className={`${waveClass} box7`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
