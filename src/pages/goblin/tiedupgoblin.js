import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import MagicInput from "../../components/magic-input"

const inputOptions = [
  {
    name: "relashio",
    url: "goblin/goblin",
  }
]

const Goblin = () => {
  return (
    <Layout>
      <SEO title="Tied up Goblin" />
      <p className="narrative">
        It seems that you have tied the little guy up in a bunch of bandages. It
        doesn't seem to make him any happier. Maybe try another spell to fix
        this?
      </p>
      <MagicInput spells={inputOptions} />
    </Layout>
  )
}

export default Goblin
