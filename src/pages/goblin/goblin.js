import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import MagicInput from "../../components/magic-input"

const inputOptions = [
  {
    name: "orchideous",
    url: "goblin/happygoblin",
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
  return (
    <Layout>
      <SEO title="Sad Goblin" />
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
      <p><b>Incendio</b> Produces fire.</p>
      
      <MagicInput spells={inputOptions} />
    </Layout>
  )
}

export default SadGoblin
