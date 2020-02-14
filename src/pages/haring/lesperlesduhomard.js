import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import MagicInput from "../../components/magic-input"


const Perles = () => (
  <Layout>
    <SEO title="Les Perles Du Homard" />
    <h1>Les Perles Du Homard</h1>
    <p>
      Quite different from your butter beer and fire whisky! But this one has a
      mouth watering description:
    </p>
    <p>
      <i>
        "Saisons are all about the yeast. It’s the specific strains and
        relatively long fermentation that create the complex spicy, fruity
        esters and dryness."
      </i>
    </p>
    <p>
      Lovely but I digress! As you can see, you find yourselves in a lovely pub. Here you
      will learn the knack of doing inconspicuous magic right under the noses of
      muggles.
    </p>
    <p>
      Unfortunately you girls are not old enough to drink all these fancy beers.
      So I hope they have some nice lemonades that you can drink.
    </p>
    <p>
      While wetting your whistles and shoving some food in them it's time for
      your next task: Interrogation! There's this pesky <b>goblin</b> who has
      the next hint for you. Good luck!
    </p>
    <MagicInput />
  </Layout>
)

export default Perles
