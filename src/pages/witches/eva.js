import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import WitchProfile from "../../components/witchProfile"
import MagicInput from "../../components/magic-input"

import image from "../../images/witches/eva.png"

const witchData = {
  name: "Eva",
  description: "Eva is an extremely brave, loyal, and selfless person who possessed tremendous strength of character. Eva was also very strong-willed and unafraid to stand up for himself. Eva possesses an instinctual, intuitive intelligence. And although she is clever, Eva lackes intellectual curiosity. He rarely put forth effort into school work. Eva generally does her best magical work when tackling practical exams rather than theoretical ones. Eva does have some fears, though she hides them extremely well. These fears include the dark, pigeons and small spaces.",
  image: image,
  spells: ["Obliviate"],
}

const Eva = () => (
  <Layout>
    <SEO title="Eva" />
    <WitchProfile witchData={witchData} />
    <MagicInput />
  </Layout>
)

export default Eva
