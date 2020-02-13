import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Bubble = ({ data }) => (
  <Layout>
    <SEO title="Bubble" />
    <Img fluid={data.fileName.childImageSharp.fluid} alt="Bubble" />
  </Layout>
)

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "morse.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Bubble
