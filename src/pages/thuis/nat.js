import React from "react"
import SEO from "../../components/seo"
import image from "../../images/thuis33.jpg"

const Water = () => {
  return (
    <div>
      <SEO title="Water" />
      <h1 style={{ margin: "1rem" }}>The next location</h1>
      <img
        src={image}
        style={{
          minWidth: "100vw",
        }}
        alt="Water"
      />
    </div>
  )
}

export default Water