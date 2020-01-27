import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import WitchProfile from "../../components/witchProfile"
import MagicInput from "../../components/magic-input"

const witchData = {
  name: "Jolien",
  description: "lorem ipsum",
  image: "jolien.png",
  spells: ["incendio", "glacius"],
}

const Jolien = () => (
  <Layout>
    <SEO title="Jolien" />
    <WitchProfile witchData={witchData} />
    <MagicInput />
  </Layout>
)

export default Jolien
