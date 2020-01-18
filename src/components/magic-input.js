import React, { useState } from "react"
import { magic } from "../services/magic-input-service"

import "./magic-input.scss"

const MagicInput = () => {
  const [input, setInput] = useState("") // '' is the initial state value
  let [error, setError] = useState(false) // '' is the initial state value

  function processInput(input) {
    const magicMissing = magic(input, [], "Nope wrong one")
    if (magicMissing) {
      error = setError(true)

      setTimeout(function() {
        error = setError(false)
      }, 1000)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      processInput(input)
    }
  }

  return (
    <div className={`magic-input ${error ? "is-danger" : ""}`}>
      <input
        id="magic-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder=""
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => processInput(input)} className="gold-button">
        <i className="ra ra-fairy-wand"></i>
      </button>
    </div>
  )
}

export default MagicInput
