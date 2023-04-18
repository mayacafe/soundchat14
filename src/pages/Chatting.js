import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillCursorFill ,BsPlusCircle,BsImages,BsEmojiSmileFill} from "react-icons/bs";

function Chatting() {
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
                  <div class="msg left-msg">
                    <div class="msg-bubble">
                      <div class="msg-info">
                        <div class="msg-info-name">BOT</div>
                        <div class="msg-info-time">12:45</div>
                      </div>

                      <div class="msg-text">
                        Hi, welcome to SimpleChat! Go ahead and send me a
                        message. 😄
                      </div>
                    </div>
                  </div>

                  <div class="msg right-msg">
                    <div class="msg-bubble">
                      <div class="msg-info">
                        <div class="msg-info-name">Sajad</div>
                        <div class="msg-info-time">12:46</div>
                      </div>

                      <div class="msg-text">
                        You can change your name in JS section!
                      </div>
                    </div>
                  </div>
                  <div class="msg left-msg">
                    <div class="msg-bubble">
                      <div class="msg-info">
                        <div class="msg-info-name">BOT</div>
                        <div class="msg-info-time">12:45</div>
                      </div>

                      <div class="msg-text">
                        Hi, welcome to SimpleChat! Go ahead and send me a
                        message. 😄
                      </div>
                    </div>
                  </div>

                  <div class="msg right-msg">
                    <div class="msg-bubble">
                      <div class="msg-info">
                        <div class="msg-info-name">Sajad</div>
                        <div class="msg-info-time">12:46</div>
                      </div>

                      <div class="msg-text">
                        You can change your name in JS section!
                      </div>
                    </div>
                  </div>
                  <div class="msg left-msg">
                    <div class="msg-bubble">
                      <div class="msg-info">
                        <div class="msg-info-name">BOT</div>
                        <div class="msg-info-time">12:45</div>
                      </div>

                      <div class="msg-text">
                        Hi, welcome to SimpleChat! Go ahead and send me a
                        message. 😄
                      </div>
                    </div>
                  </div>

                  <div class="msg right-msg">
                    <div class="msg-bubble">
                      <div class="msg-info">
                        <div class="msg-info-name">Sajad</div>
                        <div class="msg-info-time">12:46</div>
                      </div>

                      <div class="msg-text">
                        You can change your name in JS section!
                      </div>
                    </div>
                  </div>
                  <div class="msg left-msg">
                    <div class="msg-bubble">
                      <div class="msg-info">
                        <div class="msg-info-name">BOT</div>
                        <div class="msg-info-time">12:45</div>
                      </div>

                      <div class="msg-text">
                        Hi, welcome to SimpleChat! Go ahead and send me a
                        message. 😄
                      </div>
                    </div>
                  </div>

                  <div class="msg right-msg">
                    <div class="msg-bubble">
                      <div class="msg-info">
                        <div class="msg-info-name">Sajad</div>
                        <div class="msg-info-time">12:46</div>
                      </div>

                      <div class="msg-text">
                        You can change your name in JS section!
                      </div>
                    </div>
                  </div>
                  <div class="msg left-msg">
                    <div class="msg-bubble">
                      <div class="msg-info">
                        <div class="msg-info-name">BOT</div>
                        <div class="msg-info-time">12:45</div>
                      </div>

                      <div class="msg-text">
                        Hi, welcome to SimpleChat! Go ahead and send me a
                        message. 😄
                      </div>
                    </div>
                  </div>

                  <div class="msg right-msg">
                    {/* <div
                   class="msg-img"
                   style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
                   ></div> */}

                    <div class="msg-bubble">
                      <div class="msg-info">
                        <div class="msg-info-name">Sajad</div>
                        <div class="msg-info-time">12:46</div>
                      </div>

                      <div class="msg-text">
                        You can change your name in JS section!
                      </div>
                    </div>
                  </div>
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
                    style={{color:"#000 !importants"}}
                  />
                  <button
                    class="btn btn--send"
                    title="Send message"
                    tabindex="0"
                  >
                    <span className="emoji">
                      <BsEmojiSmileFill/>
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
