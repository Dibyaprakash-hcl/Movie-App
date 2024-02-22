import React, { FC, useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./videoPopup.scss";
interface VideoPopupProps {
  show: boolean;
  setShow: (show: boolean) => void;
  videoId: string | null;
  setVideoId: (videoId: string | null) => void;
}
const VideoPopup: FC<VideoPopupProps> = ({show,setShow,videoId,setVideoId,}) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  console.log(videoId, "cccc");
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          data-testid="video-player"
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};
export default VideoPopup;