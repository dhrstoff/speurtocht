import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import WitchProfile from "../../components/witchProfile"
import MagicInput from "../../components/magic-input"

const witchData = {
  name: "Aniek",
  description: `
  Aniek is an extremely quirky girl, with a serene disposition and many eccentric beliefs and qualities. She is a complete nonconformist; she lacks self-consciousness and is not afraid to show who she truly is. Aniek is also intelligent and unusually perceptive.
  `,
  image: "Aniek.png",
  spells: ["incendio", "glacius"],
}

const Aniek = () => (
  <Layout>
    <SEO title="Aniek" />
    <WitchProfile witchData={witchData} />
    <MagicInput />
  </Layout>
)

export default Aniek
