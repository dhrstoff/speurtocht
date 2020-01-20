import React, { useState } from "react"
import { magic } from "../services/magic-input-service"

import "./magic-input.scss"

const MagicInput = ({ spells }) => {
  const [input, setInput] = useState("") // '' is the initial state value
  let [validation, setValidation] = useState("")

  function processInput(input) {
    const magicMissing = magic(input, spells)

    if (!magicMissing) {
      validation = setValidation("incorrect")

      setTimeout(() => {
        validation = setValidation("")
      }, 1000)
    } else {
      validation = setValidation("correct")

      setTimeout(() => {
        validation = setValidation("")
      }, 1000)
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      processInput(input)
    }
  }

  return (
    <div className={`magic-input ${validation}`}>
      <input
        id="magic-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder=""
        spellCheck="false"
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => processInput(input)} className="gold-button">
        <i className="ra ra-fairy-wand"></i>
      </button>
    </div>
  )
}

export default MagicInput
