import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import MagicInput from "../../components/magic-input"

const HappyGoblin = () => {
  return (
    <Layout>
      <SEO title="Happy Goblin" />
      <p className="narrative">He's happy now!</p>
      <MagicInput />
    </Layout>
  )
}

export default HappyGoblin
