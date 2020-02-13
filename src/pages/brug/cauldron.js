import React from "react"
// import Img from "gatsby-image"
// import { graphql } from "gatsby"
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
