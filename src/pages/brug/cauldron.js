import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Cauldron = ({ data }) => (
  <Layout>
    <SEO title="Cauldron" />
    {/* TODO: add pigpen image */}
    {/* <Img fluid={data.fileName.childImageSharp.fluid} alt="" /> */}
  </Layout>
)

// export const query = graphql`
//   query {
//     fileName: file(relativePath: { eq: "morse.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export default Cauldron
