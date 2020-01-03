import React, { useState } from "react";
import { navigate } from "gatsby";
import './magic-input.scss';

const MagicInput = () => {
    const [input, setInput] = useState(''); // '' is the initial state value

    return (
        <div className="magic-input">
            <input id="magic-input" value={input} onChange={e => setInput(e.target.value)} placeholder=""/>
            <button onClick={() => { magic(input) }} className="gold-button">Dicens</button>
        </div>
    )
};

function magic(url) {
    if (url === 'koekjes') {
      navigate(url);
    } else {
      alert(`${url} is niet de spreuk die je zoekt`);
    }
  }

export default MagicInput;
