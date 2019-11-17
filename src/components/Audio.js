import React from 'react';

const Audio = ({ code, src, keyPressed }) => {

    if (code === keyPressed) {
        const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
        audio.currentTime = 0;
        audio.play();
    } 

    return (
        <audio data-key={code} src={src}></audio>
    )
}

export default Audio
