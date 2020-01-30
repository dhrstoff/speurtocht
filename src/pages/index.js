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

      <p>This lovely magical book will help you in your quest!</p>
      <p>If you're ever stuck do reach out to Professor Zagabini.</p>
      <p>
        To get this thing started, please use <b>the magic word</b> in the
        golden bar below.
      </p>
      <MagicInput />
    </Layout>
  )
}

export default IndexPage
