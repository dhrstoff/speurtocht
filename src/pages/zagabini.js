import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image from "../images/zagabini.jpg"

const Zagabini = () => (
  <Layout>
    <SEO title="Zagabini" />
      <div className="profile-img">
        <img src={image} alt="Zagabini" />
      </div>
      <h1>Professor Zagabini</h1>
      <p>Considered by many to be the most powerful wizard of all time, Zagabini is benevolent and wise, a great wizard in the vein of Merlin. He has an almost unearthly calm and relaxed demeanour and almost constantly gives off an aura of serenity and composure, rarely displaying intense emotions of anger or fear. He is known for typically speaking in a calm, collected voice, and being firm, but reasonable and kind. He is always courteous, even to people who he finds rude. </p>
      <p>Zagabini is notably eccentric. He is quite fond of knitting patterns and frequently wears flamboyant clothing. In particular, he has a somewhat odd taste in sweets: he enjoyed Muggle sweets relatively unknown in the wizarding world (particularly sherbet lemons). In addition, he had a liking for chamber music as well as ten-pin bowling. He often used humour to make people feel comfortable in his presence. Zagabini has been known to be quite philosophical; often, very few people have the understanding (or patience) to comprehend his philosophies.</p>
  </Layout>
)

export default Zagabini
