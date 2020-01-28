import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MagicInput from "../components/magic-input"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to this special lesson of Muggle Studies</h1>
      <p>
        Your goal will be to ..
      </p>
      <h2>The rules</h2>
      <ul>
        <li>one</li>
        <li>one</li>
      </ul>
      <p>
        Use the <b>magic</b> word.
      </p>
      <MagicInput />
    </Layout>
  )
}

export default IndexPage
