import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BsFillCursorFill,
  BsPlusCircle,
  BsImages,
  BsEmojiSmileFill,
} from "react-icons/bs";
import axios from "axios";
function Chatting() {
  const [ChatMessage, setChatMessage] = useState([]);

  useEffect(() => {
    // trackPromise(
    axios
      .get(`https://chat.soundchatradio.com:8000/group_chat_history`)
      .then((response) => {
        console.log(response, "chat");
        setChatMessage(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // );
  }, []);
  return (
    <>
      <div className="chatting-new-window">
        <div className="container">
          <Row>
            <Col lg={8} md={12} sm={12} className="offset-2">
              <section class="msger">
                <header class="msger-header">
                  <div class="msger-header-title">
                    <i class="fas fa-comment-alt"></i> Chat now
                  </div>
                  <div class="msger-header-options">
                    <span>
                      <i class="fas fa-cog"></i>
                    </span>
                  </div>
                </header>

                <main class="msger-chat">
                  {ChatMessage.map((chat) => {
                    return (
                      <>
                        {chat.name === "fyapp1965@gmail.com." ? (
                          <>
                            <div class="msg right-msg">
                              <div
                                class="msg-bubble"
                                style={{
                                  backgroundColor:
                                    "#" + chat.messageBubbleColor.slice(2),
                                }}
                              >
                                <div class="msg-info">
                                  <div
                                    class="msg-info-name"
                                    style={{ color: "yellow" }}
                                  >
                                    {chat.name}
                                  </div>
                                </div>
                                <div
                                  class="msg-text"
                                  style={{
                                    color: "#" + chat.textColor.slice(2),
                                  }}
                                >
                                  {chat.messageType === "text" ? (
                                    <> {chat.message}</>
                                  ) : (
                                    <>
                                      <img src={chat.message} alt="my-gif" />
                                    </>
                                  )}
                                  <div class="msg-info-time">12:46</div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div class="msg left-msg">
                              <div
                                style={{
                                  backgroundColor:
                                    "#" + chat.messageBubbleColor.slice(2),
                                }}
                                class="msg-bubble"
                              >
                                <div class="msg-info">
                                  <div
                                    class="msg-info-name"
                                    style={{ color: "yellow" }}
                                  >
                                    {chat.name}
                                  </div>
                                </div>
                                <div
                                  class="msg-text"
                                  style={{
                                    color: "#" + chat.textColor.slice(2),
                                  }}
                                >
                                  {chat.messageType === "text" ? (
                                    <> {chat.message}</>
                                  ) : (
                                    <>
                                      <img src={chat.message} alt="my-gif" />
                                    </>
                                  )}
                                  <div class="msg-info-time">
                                    {chat.createdAt}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    );
                  })}
                </main>

                <footer class="msg-chatt-footer">
                  <h6 className="send-plus">
                    <BsPlusCircle />
                  </h6>
                  <h6 className="send-plus">
                    <BsImages />
                  </h6>
                  <input
                    type="text"
                    class="msg-chatt-text"
                    placeholder="Write a message..."
                    autocomplete="off"
                    style={{ color: "#000 !importants" }}
                  />
                  <button
                    class="btn btn--send"
                    title="Send message"
                    tabindex="0"
                  >
                    <span className="emoji">
                      <BsEmojiSmileFill />
                    </span>
                    <h5 className="send-bn">
                      <BsFillCursorFill />
                    </h5>
                  </button>
                </footer>
              </section>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default Chatting;
