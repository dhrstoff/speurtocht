import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Witching = ({data}) => (
  <Layout>
    <SEO title="Witching" />
    <h1>Splendidly well done on those puzzles ladies!</h1>
    <p>
      It's time to say goodbye to these fantastic helpfull wizards and go to the
      next location.
    </p>
    <p>
      Your next task is to really mingle with the muggles. So your next location
      has to do with the symbol below. Good luck!
    </p>
    <Img style={{
        maxWidth: "300px",
        margin: "0 auto",
        marginBottom: "2rem"
    }}fluid={data.fileName.childImageSharp.fluid} alt="haring" />
    <p>
      And to keep you entertained during your walk I have another riddle for
      you..
    </p>
    <p>
      Lose me once and I'll come back stronger. Lose me twice and I'm gone
      forever. What am I?
    </p>
  </Layout>
)

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "haring.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Witching
