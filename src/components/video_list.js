import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videos = props.videos;
    return (
        <ul className="col-md-4 list-group">
            {videos.map((elem) => {
                return (
                    <VideoListItem
                        onVideoSelect={props.onVideoSelect}
                        video={elem}
                        key={elem.etag}/>
                );
            })}
        </ul>
    );
};

export default VideoList;