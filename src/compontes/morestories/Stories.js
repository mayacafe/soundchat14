import React, { useState, useEffect } from "react";
import moment from 'moment';
import HeaderBottamSection from "../header/HeaderBottamSection";
import FooterSection from "../layout/FooterSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink, useLocation } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";
export default function Stories() {
  const data = useLocation();
  //console.log(data, "hii");
  const [RelatedVideo, setRelatedVideo] = useState([]);
  const [StoriesViewVideo, setStoriesViewVideo] = useState([]);

  useEffect(() => {
    setRelatedVideo(data.state.related);
  }, [data.state]);
  useEffect(() => {
    for (let i = 0; i < RelatedVideo.length; i++) {
      setStoriesViewVideo((StoriesViewVideo) => [
        ...StoriesViewVideo,
        {
          timeline: RelatedVideo[i].timelinemedia[0],
          desc: RelatedVideo[i].post_desc,
          time: RelatedVideo[i].createdAt,
          count:RelatedVideo[i].timelinemedia.length-1
        },
      ]);
    }
  }, [RelatedVideo]);
  console.log(StoriesViewVideo, "hii");


  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
        <div className="container-fluid">
        <div className="news-heading bg-div-color">
            <h5>MORE STORIES</h5>
          </div>
            <Row>
             
              {StoriesViewVideo.map((element) => {
                    return (
                      <>
                       <Col sm={12} md={6} lg={3} className="mb-4">
                      {(element.timeline.media_type === "image")?
                        ( 
                         <section class="showcase">
                           <div className="day-div">
                           <p>{moment(element.timeline.time).format('ddd, MMM MM, YYYY')}</p> 
                           </div>
                           <div className="day-div">
                             {(element.count>0)?<p>+{element.count}</p>:<></>}
                           </div>
                           <img
                             src={
                               "https://app.soundchatradio.com/soundradiobackend/images/timeline/" +
                               element.timeline.media_name
                             }
                             alt="err_img"
                           />
                           <div class="overlay">
                             <h2>{element.desc}</h2>
                             <p>View Story</p>
                           </div>
                         </section>
                       )
                        : (element.timeline.media_type === "video") ? ( 
                          <section className="showcase">
                          <div className="day-div">
                          <p>{moment(element.timeline.time).format('ddd, MMM MM, YYYY')}</p> 
                            </div>
                            <div className="day-div">
                              {(element.count>0)?<p>+{element.count}</p>:<></>}
                            </div>
                             <img
                             src={
                               "https://app.soundchatradio.com/soundradiobackend/images/thumbnail/" +
                               element.timeline.media_thumbnail
                             }
                             alt="err_img_video"
                           />
                            <div className="news-video-icn"><BsFillCaretRightFill/></div>
                           <div class="overlay">
                             <h2>{element.desc}</h2>
                             <p>View Story</p>
                           </div>
                          </section>
                        ):
                       <></>
                            }
                            </Col>
                       </>

                    );
                  })}
              
            </Row>
        </div>
      </section>
      <FooterSection />
    </>
  );
}