import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import MagicInput from "../../components/magic-input"

const Goblin = () => {
  return (
    <Layout>
      <SEO title="Confused Goblin" />
      <p className="narrative">You blast him with an Obliviate! He looks very confused but somehow content..</p>
      <MagicInput />
    </Layout>
  )
}

export default Goblin
