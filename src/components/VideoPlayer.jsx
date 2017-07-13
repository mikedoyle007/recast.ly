var VideoPlayer = (props) => {
  let path = 'https://www.youtube.com/embed/' + props.video.id.videoId;
  let videoTitle = props.video.snippet.title;
  let videoDescription = props.video.snippet.description;

  
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={path} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{videoTitle}</h3>
        <div>{videoDescription}</div>
      </div>
    </div>
  );
};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
