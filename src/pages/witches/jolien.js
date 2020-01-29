import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import WitchProfile from "../../components/witchProfile"
import MagicInput from "../../components/magic-input"

import image from "../../images/witches/jolien.png"

const witchData = {
  name: "Jolien",
  description: "Jolien is noted for being both extremely intellectual curious and very hard-working, coming out on top in most of her classes and continuously aiding her fellow pupils. Because of her efficiency and compassion, Jolien often has time to do hobby work on the side, such as knitting dinosaurs and thinking up bad jokes. Such acts demonstrate her social conscience and tenacity. Unlike most wizards who depended solely on their magical ability, Jolien readily relies on logic, which often helpes her to cleverly deduce information that many others miss.",
  image: image,
  spells: ["Alohomora"],
}

const Jolien = () => (
  <Layout>
    <SEO title="Jolien" />
    <WitchProfile witchData={witchData} />
    <MagicInput />
  </Layout>
)

export default Jolien
