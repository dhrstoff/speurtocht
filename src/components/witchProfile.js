// import { Link } from "gatsby"
import React from "react"
import { filterSpells } from "../services/spells"

// import "./witchProfile.scss"

const WitchProfile = ({ witchData }) => {
  const mySpells = filterSpells(witchData.spells)

  return (
    <div className="witch-profile">
      <div className="witch-profile-intro">
        <div className="profile-img">
          <img src={witchData.image} alt={witchData.name} />
        </div>
        <h1>{witchData.name}</h1>
      </div>
      <i>Note: Might not be at all accurate.</i>
      {/* <h2>Description</h2> */}
      <p>{witchData.description}</p>
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
