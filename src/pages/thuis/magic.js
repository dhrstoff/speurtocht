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


const Magic = () => {
  return (
    <Layout>
      <SEO title="Magic" />
      <h2>
        The book flips open and lands on this page...
      </h2>
      <p>In the margins you see four strange words written from top to bottom..</p>
      <ol>
        <li>ehqd</li>
        <li>uglb</li>
        <li>bxoqe</li>
        <li>swpan</li>
      </ol>
      <MagicInput spells={inputOptions} />
    </Layout>
  )
}

export default Magic
