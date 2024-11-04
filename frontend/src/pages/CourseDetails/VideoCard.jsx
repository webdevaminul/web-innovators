
const VideoCard = ({video}) => {
  console.log(video, 'vdeo');
  const previewVdo = video
  console.log("pre", previewVdo);
  return (
    <div className="video-container w-full aspect-video">
      <iframe
        className="w-full h-full rounded-md border-4 border-secondary"
        src="https://www.youtube.com/embed/yckDUJh7mxo?si=UAjiy_7_ULoAq8u1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
