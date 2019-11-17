import React, { useState, useEffect } from 'react';
import Key from '../Key/Key';
import Audio from '../Audio';
import './Keys.css';

const Keys = props => {
    const [keyPressed, setKeyPressed] = useState();
    const keys = [
        {code: "65", char: "A", sound: "clap", src: "sounds/clap.wav"},
        {code: "83", char: "S", sound: "hihat", src: "sounds/hihat.wav"},
        {code: "68", char: "D", sound: "kick", src: "sounds/kick.wav"},
        {code: "70", char: "F", sound: "openhat", src: "sounds/openhat.wav"},
        {code: "71", char: "G", sound: "boom", src: "sounds/boom.wav"},
        {code: "72", char: "H", sound: "ride", src: "sounds/ride.wav"},
        {code: "74", char: "J", sound: "snare", src: "sounds/snare.wav"},
        {code: "75", char: "K", sound: "tom", src: "sounds/tom.wav"},
        {code: "76", char: "L", sound: "tink", src: "sounds/tink.wav"}
    ];

    useEffect(() => {
        window.addEventListener('keydown', 
            (e) => setKeyPressed(`${e.keyCode}`)
        );
    }, []);

    return (
        <>
            <div className="keys">
                {keys.map(key => (
                    <Key key={key.code} {...key} keyPressed={keyPressed} />
                ))}
            </div>
            {keys.map(key => (
                <Audio key={key.code} {...key} keyPressed={keyPressed} />
                ))
            }
        </>
    );
}

export default Keys;