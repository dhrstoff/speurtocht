import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import WitchProfile from "../../components/witchProfile"
import MagicInput from "../../components/magic-input"

const witchData = {
  name: "Britt",
  description: "When she was younger, Britt was clumsy, forgetful, shy, and many considered her ill-suited for Gryffindor house because she seemed timid. However, Britt proved that the Sorting Hat had seen the bravery beneath her insecurity. With the support of her friends and the encouragement of Professor Zagabini to face her fears Britt has become braver, more self-assured, and dedicated. Britt has blossomed from a timid, self-deprecating, and generally nervous student into a stalwart soldier possessed of an ironclad will, courage of outstanding merit, and a nobility of spirit. In many ways, Britt's transformation allowed her to change from a scaredy-cat into a lordly lion, becoming a ferocious defender of her fellow students.",
  image: "britt.png",
  spells: ["incendio", "glacius"],
}

const Britt = () => (
  <Layout>
    <SEO title="Britt" />
    <WitchProfile witchData={witchData} />
    <MagicInput />
  </Layout>
)

export default Britt
