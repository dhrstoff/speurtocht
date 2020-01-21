import React, { useState } from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import MagicInput from "../../components/magic-input"

const options = [
  {
    id: "start",
    startText: "Little goblin crying",
    negativeText: "Goblin is even sadder now",
    options: ["glacius"],
  },
  {
    id: "glacius",
    startText: "The little goblin is enveloped in a massive ice cube. Better fix this quick!",
    negativeText: "That didn't work. Atleast his sad face can't go down any more due to all the ice..",
    options: ["end"],
  },
  {
    id: "end",
    startText: "Hooray!",
    options: ["start"],
  },
]

const inputOptions = [
  {
    name: "orchideous",
    url: "goblin/happygoblin",
    response: "asdf",
    options: ["glacius"],
    onSuccess: "",
  },
  {
    name: "ferula",
    url: "goblin/tiedupgoblin",
  },
  {
    name: "glacius",
    url: "goblin/frozengoblin",
  },
  {
    name: "obliviate",
    url: "goblin/confusedgoblin",
  },
  {
    name: "flipendo",
    url: "goblin/startledgoblin",
  },
]

const SadGoblin = () => {
  const [input, setInput] = useState("") // '' is the initial state value
  const [text, setText] = useState("") // '' is the initial state value
  const [goblinState, setGoblinState] = useState(0) // '' is the initial state value

  function processInput(inputValue) {
    let cleanInputValue = inputValue.replace(/\s+/g, "").toLowerCase()

    const currentGoblinState = options[goblinState];

    if (currentGoblinState.options.includes(cleanInputValue)) {
      const value = options.find(item => item.id === cleanInputValue)
      let newText = text.concat(value.startText)

      setGoblinState(options.findIndex(value => value.id === cleanInputValue))
      setText(newText)
    } else {
      let newText = text.concat(currentGoblinState.negativeText)
      setText(newText)
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      processInput(input)
      setInput("")
    }
  }

  return (
    <Layout>
      <SEO title="Sad Goblin" />
      {text}

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder=""
        spellCheck="false"
        onKeyDown={handleKeyDown}
      />

      <p>{options[goblinState].id}</p>

      <p className="narrative">
        The book flips in the air and lands back on its back!
      </p>
      <p className="narrative">
        On the next page you see a small goblin with one arm over his face. You
        hear soft crying. Maybe you can help the little fella with some handy
        magic?
      </p>

      <h1>Spells</h1>
      <i>In the eventual game these will be spread out over the players.</i>
      <p>
        <b>Glacius</b> Freezes the target with icy-cold air.
      </p>
      <p>
        <b>Orchideous</b> Conjures a bouquet of flowers.
      </p>
      <p>
        <b>Flipendo</b> Knocks objects and creatures backwards.
      </p>
      <p>
        <b>Furnunculus</b> Covers the target in boils (or pimples).
      </p>
      <p>
        <b>Ferula</b>Conjures up bandages and wraps them around a wound,
        splinting any broken bones.
      </p>
      <p>
        <b>Relashio</b>The Revulsion Jinx (Relashio) is a jinx that forces the
        target to release its grip on whatever it is holding. It works on both
        living and inanimate targets, so long as it is holding something.
      </p>
      <p>
        <b>Obliviate</b> Erase specific memories.
      </p>
      <p>
        <b>Incendio</b> Produces fire.
      </p>

      <MagicInput spells={inputOptions} />
    </Layout>
  )
}

export default SadGoblin
