import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import img5 from "../../images/finale/5.jpg"
import img6 from "../../images/finale/6.jpg"
import img7 from "../../images/finale/7.jpg"
import img8 from "../../images/finale/8.jpg"

const Parceltongue = () => (
  <Layout>
    <SEO title="Parceltongue" />
    <p>
      I sure hope everything is going swimmingly and the rain isn't bringing you
      down too much. Anyway, I present you with some gibberish!
    </p>
    <div style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <p>
        <img src={img5} alt="img5" />
      </p>
      <p>
        <img src={img6} alt="img6" />
      </p>
      <p>
        <img src={img7} alt="img7" />
      </p>
      <p>
        <img src={img8} alt="img8" />
      </p>
    </div>
  </Layout>
)

export default Parceltongue
