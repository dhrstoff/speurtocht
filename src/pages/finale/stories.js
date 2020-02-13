import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MagicInput from "../../components/magic-input"

const Stories = () => (
  <Layout>
    <SEO title="Stories" />
    <h1>Darn walls of text!</h1>
    <p>Much cleaner like this:</p>
    {/* TODO: glyph afbeeldingen
      stenenkast
      balkon
      hobbit
      hoed
    */}

    <MagicInput />
  </Layout>
)

export default Stories
