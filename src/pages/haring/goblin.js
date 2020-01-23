import React, { useState } from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

// import MagicInput from "../../components/magic-input"

import "./goblin.scss"

const inputOptions = [
  {
    id: "flipendo",
    startText:
      "You hit him with a well aimed Flipendo and he flies through the air. He lands on the ground with a large bang and sticks out two middle fingers at you.",
    negativeText: `The little goblin cusses at you`,
    options: [
      {
        input: "glacius",
        effect: "glacius",
      },
      {
        input: "incendio",
        effect: "incendio",
      },
      {
        input: "ferula",
        effect: "ferula",
      },
      {
        input: "flipendo",
        effect: "flipendo",
      },
    ],
  },
  {
    id: "glacius",
    startText:
      "The little goblin is enveloped in a massive ice cube. Better fix this quick!",
    negativeText:
      "That didn't work. Atleast he cannot swear now due to all the ice..",
    options: [
      {
        input: "incendio",
        effect: "incendioFix",
      },
    ],
  },
  {
    id: "glaciusFix",
    startText:
      "That did the trick! He's laying shivering on the floor but you certainly have his attention now!",
    negativeText: `The little goblin cusses at you, maybe you need him to forget this ever happened`,
    options: [
      {
        input: "glacius",
        effect: "glacius",
      },
      {
        input: "incendio",
        effect: "incendio",
      },
      {
        input: "obliviate",
        effect: "obliviate",
      },
    ],
  },
  {
    id: "incendio",
    startText:
      "You shoot a fire bolt at him; It blows up in his face and he is now on fire. Well you have his attention now..",
    negativeText: `The little goblin let's out a scream that could curdle blood.`,
    options: [
      {
        input: "glacius",
        effect: "glaciusFix",
      },
    ],
  },
  {
    id: "incendioFix",
    startText:
      "The fire bolt melts the ice block away. He seems more attentive now!",
    negativeText: `The little goblin cusses at you, maybe you need him to forget this ever happened`,
    options: [
      {
        input: "incendio",
        effect: "incendio",
      },
      {
        input: "flipendo",
        effect: "flipendo",
      },
      {
        input: "obliviate",
        effect: "obliviate",
      },
    ],
  },
  {
    id: "ferula",
    startText:
      "The bandages can't find any wounds so they wrap around his head, making him unable to speak.",
    negativeText:
      "You think the little goblin is cussing but you can't really understand him with all the bandages",
    options: [
      {
        input: "relashio",
        effect: "relashio",
      },
      {
        input: "incendio",
        effect: "incendioFix",
      },
    ],
  },
  {
    id: "relashio",
    startText:
      "The bandages break free from his head but he looks even more displeased now.",
    negativeText: `The little goblin cusses at you`,
    options: [
      {
        input: "glacius",
        effect: "glacius",
      },
      {
        input: "incendio",
        effect: "incendio",
      },
      {
        input: "ferula",
        effect: "ferula",
      },
      {
        input: "flipendo",
        effect: "flipendo",
      },
    ],
  },
  {
    id: "obliviate",
    startText:
      "A blank look comes over the face of the little goblin. He stares at you curiously.",
    negativeText:
      "The little goblin hickups. It seems a snot bell is forming under his nose. He is staring at you now. Maybe you should cheer him up or something..",
    options: [
      {
        input: "orchideous",
        effect: "orchideous",
      },
    ],
  },
  {
    id: "orchideous",
    startText: "Hooray! You've won!",
    options: [],
  },
]

const SadGoblin = () => {
  const [input, setInput] = useState("") // '' is the initial state value
  const [text, setText] = useState("") // '' is the initial state value
  const [goblinState, setGoblinState] = useState(0) // '' is the initial state value

  function processInput(inputValue) {
    const cleanInputValue = inputValue.replace(/\s+/g, "").toLowerCase()
    const currentGoblinState = inputOptions[goblinState]
    const inputInOptions = currentGoblinState.options.find(
      item => item.input === cleanInputValue
    )

    if (inputInOptions) {
      const value = inputOptions.find(item => item.id === inputInOptions.effect)
      updateNarrative(cleanInputValue, value.startText)

      setGoblinState(
        inputOptions.findIndex(value => value.id === inputInOptions.effect)
      )
    } else {
      updateNarrative(cleanInputValue, currentGoblinState.negativeText)
    }
  }

  function updateNarrative(inputValue, description) {
    let newText = text.concat(`<i>${inputValue}!</i><p>${description}</p>`)

    setText(newText)
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      processInput(input)
      setInput("")
    }
  }

  return (
    <Layout>
      <SEO title="Cute Goblin" />
      <div className="goblin">
        <p className="narrative">
          The book flips in the air and lands back on its back!
        </p>
        <p className="narrative">
          On the next page you see a cute small goblin. He seems to be
          actively ignoring you. Maybe you can get the little fella's attention
          with some handy magic by writing it on the dotted line!
        </p>
        <br />

        <div
          className="dialog"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>

        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder=""
          spellCheck="false"
          onKeyDown={handleKeyDown}
        />

        <h1>Spells</h1>
        <p>
          <i>In the eventual game these will be spread out over the players.</i>
        </p>
        <p>
          <b>Glacius</b> Freezes the target with icy-cold air.
        </p>
        <p>
          <b>Orchideous</b> Conjures a bouquet of flowers.
        </p>
        <p>
          <b>Flipendo</b> Knocks objects and creatures backwards.
        </p>
        {/* <p>
          <b>Furnunculus</b> Covers the target in boils (or pimples).
        </p> */}
        <p>
          <b>Ferula</b> Conjures up bandages and wraps them around a wound,
          splinting any broken bones.
        </p>
        <p>
          <b>Relashio</b> The Revulsion Jinx (Relashio) is a jinx that forces the
          target to release its grip on whatever it is holding. It works on both
          living and inanimate targets, so long as it is holding something.
        </p>
        <p>
          <b>Obliviate</b> Erase specific memories.
        </p>
        <p>
          <b>Incendio</b> Produces fire.
        </p>
      </div>

      {/* <MagicInput spells={inputOptions} /> */}
    </Layout>
  )
}

export default SadGoblin
