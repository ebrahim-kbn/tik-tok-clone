import React, { useRef } from "react";
import "./Video.css";
import VideoSidebar from "./VideoSidebar";
import VideoFooter from "./VideoFooter";
function Video({ url, channel, song, description, likes, shares, messages }) {
  const videoRef = useRef(null);
  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <div className="video">
      <div className="video__logo">
        <h2>Tik Tok</h2>
      </div>

      <video
        ref={videoRef}
        onClick={handlePlay}
        className="video__player"
        width="100%"
        loop
        src={url}
      ></video>

      <VideoSidebar likes={likes} shares={shares} messages={messages} />
      <VideoFooter channel={channel} song={song} description={description} />
    </div>
  );
}

export default Video;
