import React from 'react';
import Key from '../Key/Key';
import './Keys.css';

const Keys = props => {
    const keys = [
        {code: "65", char: "A", sound: "clap"},
        {code: "83", char: "S", sound: "hihat"},
        {code: "68", char: "D", sound: "kick"},
        {code: "70", char: "F", sound: "openhat"},
        {code: "71", char: "G", sound: "boom"},
        {code: "72", char: "H", sound: "ride"},
        {code: "74", char: "J", sound: "snare"},
        {code: "75", char: "K", sound: "tom"},
        {code: "76", char: "L", sound: "tink"}
    ]

    return (
        <div class="keys">
            {keys.map(key => (
                <Key {...key} />
            ))}
        </div>
    );
}

export default Keys;