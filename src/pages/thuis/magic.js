import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import MagicInput from "../../components/magic-input"

const inputOptions = [
  {
    name: "fire",
    url: "thuis/vurig",
  },
  {
    name: "wind",
    url: "thuis/poef"
  }, {
    name: "earth",
    url: "thuis/grondig"
  },
  {
    name: "water",
    url: "thuis/nat"
  }
]
// Elke letter is met een vast aantal omhoog verplaatst in het alphabet afhankelijk van de volgorde. Nummer 1 is met 1 plek verplaatst. Letter 1 hiervan is nog 1 plek verplaatst
//

const Magic = () => {
  return (
    <Layout>
      <SEO title="Magic" />
      <h2>
        The book flips open and lands on this page...
      </h2>
      <p>In the margins you see four strange words written from top to bottom..</p>
      <p>eire</p>
      <p>uelb</p>
      <p>bxlqe</p>
      <p>swpwn</p>
      <MagicInput spells={inputOptions} />
    </Layout>
  )
}

export default Magic
