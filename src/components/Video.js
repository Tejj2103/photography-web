import React from 'react';

const video = (props) => {
    return (
        <video width="100%" height="100%" controls autoPlay>
            <source src={props.video} type="video/mp4" />
        </video>
    )
}

export default video