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
    url: "thuis/poef",
  },
  {
    name: "earth",
    url: "thuis/grondig",
  },
  {
    name: "water",
    url: "thuis/nat",
  },
]

const Magic = () => {
  return (
    <Layout>
      <SEO title="Magic" />
      <h2>The book starts flipping through pages and lands on this one.</h2>

      <p>
        Let's test your code cracking skills! Below are four magical words that
        you need to decode and enter in the gold bar. Good luck!
      </p>

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
