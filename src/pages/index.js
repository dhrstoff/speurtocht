import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MagicInput from "../components/magic-input"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2>To whomever that reads this;</h2>
      <p>
        I've run out of time. I know the next step will be imprisonment so I won't be able to finish it.
      </p>
      <p>But you might.</p>
      <p>Use the <b>magic</b> word.</p>
      <MagicInput />
    </Layout>
  )
}

export default IndexPage
