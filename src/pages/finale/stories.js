import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MagicInput from "../../components/magic-input"

import img1 from "../../images/finale/1.jpg"
import img2 from "../../images/finale/2.jpg"
import img3 from "../../images/finale/3.jpg"
import img4 from "../../images/finale/4.jpg"

const Stories = () => (
  <Layout>
    <SEO title="Stories" />
    <h1>Darn walls of text!</h1>
    <p>Much cleaner like this:</p>
    <div style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <p>
        <img src={img1} alt="img1" />
      </p>
      <p>
        <img src={img2} alt="img2" />
      </p>
      <p>
        <img src={img3} alt="img3" />
      </p>
      <p>
        <img src={img4} alt="img4" />
      </p>
    </div>
  </Layout>
)

export default Stories
