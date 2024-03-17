import React from 'react';

const Reels = (props) => {
    return (
        <video width="290" height="500" controls autoPlay>
            <source src={props.video} type="video/mp4" />
        </video>
    )
}

export default Reels