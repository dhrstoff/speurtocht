// import { Link } from "gatsby"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { filterSpells } from "../services/spells"

import "./witchProfile.scss"

const WitchProfile = ({ witchData }) => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "jolien.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const mySpells = filterSpells(witchData.spells)

  return (
    <div className="witch-profile">
      <div className="witch-profile-intro">
        <div className="profile-intro-text">
          <h1>{witchData.name}</h1>
          <h2>Description</h2>
          <i>Note: Might not be fully accurate.</i>
          <p>{witchData.description}</p>
        </div>
        {/* <Img
          className="profile-img"
          fixed={data.fileName.childImageSharp.fixed}
          alt=""
        /> */}
      </div>
      <div className="spell-list">
        <h2>Spell{witchData.spells.length > 1 ? "s" : ""}</h2>
        {mySpells.map(spell => {
          return (
            <div key={spell.name}>
              <h3>{spell.name}</h3>
              <p>{spell.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WitchProfile
