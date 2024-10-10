import React from "react";

const VideoCard = () => {
  return (
    <div className="video-container w-full aspect-video">
      <iframe
        className="w-full h-full rounded-md border-4 border-secondary"
        src="https://www.youtube.com/embed/yckDUJh7mxo?si=UAjiy_7_ULoAq8u1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
