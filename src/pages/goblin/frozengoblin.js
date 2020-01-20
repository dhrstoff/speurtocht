import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import MagicInput from "../../components/magic-input"

const inputOptions = [
  {
    name: "incendio",
    url: "goblin/goblin",
  }
]

const Goblin = () => {
  return (
    <Layout>
      <SEO title="Frozen Goblin" />
      <p className="narrative">
        The little goblin is enveloped in a massive ice cube. Better fix this quick!
      </p>
      <MagicInput spells={inputOptions} />
    </Layout>
  )
}

export default Goblin
