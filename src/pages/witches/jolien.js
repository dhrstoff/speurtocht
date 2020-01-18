import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MagicInput from "../../components/magic-input";

const Jolien = () => (
  <Layout>
    <SEO title="Jolien" />
    <h1>Hoi Jolien!</h1>
    <MagicInput allowedValues={["alohomora"]}/>
  </Layout>
)

export default Jolien;
