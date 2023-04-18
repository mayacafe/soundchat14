import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import { HiUser } from "react-icons/hi";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ToastContainer, toast } from "react-toastify";


export default function SoundchatVideoSection(props) {
  const navigate = useNavigate()
  // const { promiseInProgress } = usePromiseTracker();
  const showToastMessage = (data) => {
    toast.success(data, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const showToastMessageone = (data) => {
    toast.error(data, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const [LiveVedio, setLiveVedio] = useState({});
  const [videoStatus, setvideoStatus] = useState(true);
  useEffect(() => {
    axios
      .post(`https://app.soundchatradio.com:3000/api/v1/auth/listlivecontent`)
      .then((response) => {
        setLiveVedio(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (props.props === "play") {
      setvideoStatus(false);
    } else if (props.props === "pause") {
      setvideoStatus(true);
    }
  }, [props]);

  function handleSubmit(values) {
    // alert("hii")
    //  trackPromise(
      axios({
        method: "POST",
        url: "https://app.soundchatradio.com:3000/api/v1/auth/guestsignin",
        data: {
          username: values.username,
        }
      })
        .then((response) => {
          console.log(response.data);
            if(response.data.status===400){
              showToastMessageone(response.data.message);
            }else{
              showToastMessage("login guests login successfully ")

            } 
        })
        .catch((error) => {
          console.log(error.response);
        })
    // );
  }

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required!"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
      navigate("/Chatting")
    },
  });

  return (
    <section className="bg-color">
      <div className="Soundchat-div">
        <div className="container-fluid">
          <Row>
            <Col xs={12} md={6} lg={9}>
              <div className="video-soundchat">
                <div className="video-live-home">
                  <ReactPlayer
                    className="react-player"
                    url={LiveVedio.livelink}
                    width="100%"
                    height="430px"
                    volume="1"
                    auto={true}
                    playing={videoStatus}
                    controls="true"
                    onPlay={() => {
                      localStorage.setItem("videoplayer", true);
                      localStorage.setItem("audioplayer", false);
                    }}
                    onPause={() => {
                      localStorage.setItem("videoplayer", false);
                      localStorage.setItem("audioplayer", true);
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="chat-user">
                <NavLink to="/Login">
                  <button className="btn-div-chat-login">Login to chat</button>
                </NavLink>
                <br /> <br />
                <p className="div-or">or</p>

                <form class="form-group" onSubmit={formik.handleSubmit}>
                  <div className="form-group has-search">
                    <span className="user-icon-div">
                      <HiUser />
                    </span>
                    <input
                      placeholder="Enter Guest User"
                      type="text"
                      name="username"
                      autoComplete="off"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      // class="form__input"
                    />
                     {formik.errors.username && formik.touched.username && (
                        <p className="errormessage mt-3">{formik.errors.username}</p>
                      )}
                     <br />
                  <button type="submit"  className="btn-div-chat-login new-user-chat-010">
                    Login as Guest
                  </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
