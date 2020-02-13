import React from "react"
import image from "../../images/pigpen.svg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Cauldron = ({ data }) => (
  <Layout>
    <SEO title="Cauldron" />
    <img
      src={image}
      style={{
        margin: "0 auto",
        width: "500px",
        display: "block",
      }}
    />
  </Layout>
)

export default Cauldron
