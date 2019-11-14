import React, { useEffect } from 'react';
import './Key.css';

const Key = props => {
    const { code, char, sound } = props;
    
    useEffect(() => {
        const keys = Array.from(document.querySelectorAll('.key'));
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));
        window.addEventListener('keydown', playSound);
    }, [])

    const removeTransition = (e) => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    };

    const playSound = (e) => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;

        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    };

    

    return (
        <div data-key={code} class="key">
            <kbd>{char}</kbd>
            <span class="sound">{sound}</span>
        </div>
    );
}

export default Key;