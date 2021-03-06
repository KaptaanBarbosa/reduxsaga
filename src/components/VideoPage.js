import React  from 'react';
import PropTypes from 'prop-types';

// First, we extract videos, onHandleSelectVideo, and selectedVideo 
// from props using destructuring assignment and then render.
const VideosPage = ({ videos, onHandleSelectVideo, selectedVideo }) => {
    
    if (!selectedVideo) { // evaluates to true if currentVideo is null
        return <div>Loading...</div>; 
      }
    return(
  <div className="col-md-6">
    <h2> Videos </h2>
    <div className="select-video">
      <div key={selectedVideo.id}>
        <h6 className="title">{selectedVideo.description}</h6>
        <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title} />
      </div>
    </div>
    <div className="video-thumbnail">
      {videos.map((video, i) => (
        <div key={i} onClick={onHandleSelectVideo.bind(this, video)}>
          <video controls src={video.mediaUrl} alt={video.description} />
        </div>
      ))}
    </div>
  </div>
);
}



export default VideosPage;