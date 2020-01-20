import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import MagicInput from "../../components/magic-input"

const Goblin = () => {
  return (
    <Layout>
      <SEO title="Startled Goblin" />
      <p className="narrative">The poor goblin flips through the air and lands on his face. He's crying even harder now..</p>
      <MagicInput />
    </Layout>
  )
}

export default Goblin
