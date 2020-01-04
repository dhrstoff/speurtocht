import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>kisses</h1>
    <a style={
        { 
            width: `10px`, 
            height: `10px`,
            background: `blue`
        }
        } href="foundme"></a>
    <Img fixed={data.file.childImageSharp.fixed} />

  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "974915.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 3000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default SecondPage
