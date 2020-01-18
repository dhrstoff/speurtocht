import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Well that didn't go as planned...</h1>
    <Link to="/">Take me back!</Link>
  </Layout>
)

export default NotFoundPage
