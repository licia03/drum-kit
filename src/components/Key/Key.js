import React, { useEffect } from 'react';
import './Key.css';

const Key = props => {
    const classes = ["key"];
    const { code, char, sound, keyPressed } = props;   

    useEffect(() => {
        document.querySelector(`[data-key="${code}"]`)
            .addEventListener('transitionend', removeTransition);
    }, [code])

    
    const playSound = () => {
        classes.push('playing');
    };
    
    const removeTransition = (e) => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    };
    
    if (keyPressed === code) {
        playSound();
    }

    return (
        <div data-key={code} className={classes.join(' ')}>
            <kbd>{char}</kbd>
            <span className="sound">{sound}</span>
        </div>
    );
}

export default Key;