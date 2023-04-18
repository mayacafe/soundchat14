import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment-timezone";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import video from "../../asstes/video/production ID_5156816.mp4";
export default function HeaderTopSection(props) {
  const day = moment().tz("America/Detroit").format("dddd");
  const time = moment().tz("America/Detroit").format("HH:mm");
 
  const [LiveAudio, setLiveAudio] = useState([]);
  const [LiveContent, setLiveContent] = useState([]);
  const [LiveShow, setLiveShow] = useState([]);
  const [LiveShowsData, setLiveShowsData] = useState([]);
  const [ShowTimeData, setShowTimeData] = useState([]);
  const [waveClass, setwaveClass] = useState("box");
  const [audioStatus, setaudioStatus] = useState(false);
  useEffect(() => {
    axios
      .post(`https://app.soundchatradio.com:3000/api/v1/auth/listlivecontent`)
      .then((response) => {
        setLiveAudio(response.data.data[1]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .post(`https://app.soundchatradio.com:3000/api/v1/auth/listshowschedule`)
      .then((response) => {
        setLiveShow(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    for (let i = 0; i < LiveShow.length; i++) {
      if (LiveShow[i].post_title === day) {
        setLiveShowsData(LiveShow[i].scheduleperdays);
        for (let j = 0; j < LiveShow[i].scheduleperdays.length; j++) {
          let starttime =
            LiveShow[i].scheduleperdays[j].show_start_date.split(":");
          let endtime = LiveShow[i].scheduleperdays[j].show_end_date.split(":");
          let currenttime = time.split(":");
          console.log(starttime[0], endtime[0], currenttime[0], time, "sdghfg");
          if (
            parseInt(starttime[0]) <= parseInt(currenttime[0]) &&
            parseInt(endtime[0]) >= parseInt(currenttime[0])
          ) {
          console.log("okay");
          setShowTimeData({
            show_name: LiveShow[i].scheduleperdays[j].show_name,
            show_audio_url: LiveShow[i].scheduleperdays[j].show_audio_url,
            show_image: LiveShow[i].scheduleperdays[j].show_image,
            show_start_date : LiveShow[i].scheduleperdays[j].show_start_date,
            show_end_date : LiveShow[i].scheduleperdays[j].show_end_date
          });
        }
        }
      }
    }
  }, [LiveShow]);

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
              {/* <img
                src="https://soundchatradio.com/wp-content/uploads/2018/10/logo-soundchat-radioSmall.png"
                alt=""
              /> */}
              <img
                src={
                  "https://app.soundchatradio.com/soundradiobackend/images/podcast/" +
                  ShowTimeData.show_image
                }
                alt="img-error"
              />
            </div>
            <div className="logo-text-heading">
              <h6 className="header-new-bottom-new">
                {ShowTimeData.show_name}
              </h6>
              <div className="top-head-section">
              <p>{day}</p>
              <p  className="todu">{ShowTimeData.show_start_date} - {ShowTimeData.show_end_date}</p>
              </div>
        
              <div className="main-audio-live-content">
                <AudioPlayer
                  src={LiveAudio.livelink}
                  autoPlay={Boolean(audioStatus)}
                  customAdditionalControls={[]}
                  customVolumeControls={[]}
                  showJumpControls={false}
                  showFilledProgress={false}
                  onPause={(e) => {
                    console.log("onPlay");
                    props.callback("pause");
                    localStorage.setItem("audioplayer", false);
                    localStorage.setItem("videoplayer", true);
                    if (waveClass === "box active") {
                      setwaveClass("box");
                    }
                  }}
                  onPlay={(e) => {
                    props.callback("play");
                    localStorage.setItem("audioplayer", true);
                    localStorage.setItem("videoplayer", false);

                    console.log("onPlay");
                    if (waveClass === "box") {
                      setwaveClass("box active");
                    }
                  }}
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