import React, { useState, useEffect, useRef } from "react";

function Iframeaudio() {
  return (
    <>
      <iframe
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1392684988%3Fsecret_token%3Ds-4jCyZjGNlME&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
        height="650"
        width="100%"
        title="Iframe Example"
      ></iframe>
    </>
  );
}
export default Iframeaudio;
