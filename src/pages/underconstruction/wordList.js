import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MagicInput from "../../components/magic-input"

const inputOptions = [
  {
    name: "stories",
    url: "underconstruction/stories",
  },
]

let calledCounter = 1

function createText(count) {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push(
      <span key={calledCounter + "-lies-"}>I must not tell lies. </span>
    )
    calledCounter = calledCounter + 1
  }
  return list
}

const IMustNotTellLies = () => (
  <Layout>
    <SEO title="I must not tell lies." />
    <div>
      {createText(146)}
      <span style={{ color: "rgb(76, 7, 19)" }}>I must tell stories. </span>
      {createText(84)}
    </div>
    <MagicInput spells={inputOptions} />
  </Layout>
)

export default IMustNotTellLies
