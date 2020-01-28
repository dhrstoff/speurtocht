import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import WitchProfile from "../../components/witchProfile"
import MagicInput from "../../components/magic-input"

const witchData = {
  name: "Anja",
  description: "Anja is a forceful, independent girl who often knows her own mind. She has an energetic, lively personality. Anja also is known to be quick-witted, funny, and can often make others laugh even when they were feeling down. Anja is popular during her time at Hogwarts, and is fancied by numerous boys. Anja is an animal lover, especially fond of cats.",
  image: "Anja.png",
  spells: ["incendio", "glacius"],
}

const Anja = () => (
  <Layout>
    <SEO title="Anja" />
    <WitchProfile witchData={witchData} />
    <MagicInput />
  </Layout>
)

export default Anja
