import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import WitchProfile from "../../components/witchProfile"
import MagicInput from "../../components/magic-input"

const witchData = {
  name: "Roos",
  description: "A complicated, withdrawn person, Roos's life is overwhelmed with many complex emotions that she never fully discloses. At times, Roos appears cold, cynical, malicious, bitter, and sarcastic. She has a commanding presence that exuded gravitas, authority and control.",
  image: "Roos.png",
  spells: ["incendio", "glacius"],
}

const Roos = () => (
  <Layout>
    <SEO title="Roos" />
    <WitchProfile witchData={witchData} />
    <MagicInput />
  </Layout>
)

export default Roos
