import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import WitchProfile from "../../components/witchProfile"
import MagicInput from "../../components/magic-input"

import image from "../../images/witches/claartje.png"

const witchData = {
  name: "Claartje",
  description: "Claartje is a very loyal, brave, strong and humourous person, but sometimes immature, and insensitive. She has a sardonic, wisecracking sense of humour that often brings her friends laughter and relaxation. Claartje is particularly fond of food. She has a tendency to talk with her mouth full, and a great fondness for bacon sandwiches, though she dislikes corned beef sandwiches.",
  image: image,
  spells: ["Ferula"],
}

const Claartje = () => (
  <Layout>
    <SEO title="Claartje" />
    <WitchProfile witchData={witchData} />
    <MagicInput />
  </Layout>
)

export default Claartje
