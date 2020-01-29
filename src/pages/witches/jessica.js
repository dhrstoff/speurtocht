import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import WitchProfile from "../../components/witchProfile"
import MagicInput from "../../components/magic-input"

import image from "../../images/witches/jessica.png"

const witchData = {
  name: "Jessica",
  description: "Jessica almost constantly exuded magnanimity and sternness, being held in great respect (and some fear) by nearly all students and staff. Used to having her way, she tolerates neither audacity nor silliness from anyone and is known to turn cold towards people who said or did things in front of her that were stupid, or if she thought they were trying to be funny. Despite her stern demeanour, Jessica did exhibit a dry sense of humour which usually came out when times were tough. She isn't afraid to speak her mind and shows quite a sharp tongue, especially during arguments.  ",
  image: image,
  spells: ["incendio"],
}

const Jessica = () => (
  <Layout>
    <SEO title="Jessica" />
    <WitchProfile witchData={witchData} />
    <MagicInput />
  </Layout>
)

export default Jessica
