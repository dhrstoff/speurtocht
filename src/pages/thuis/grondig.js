import React from "react"
import SEO from "../../components/seo"
import image from "../../images/thuis22.jpg"

const Earth = () => {
  return (
    <div>
      <SEO title="Earth" />
      <h1 style={{ margin: "1rem" }}>To go to</h1>
      <img
        src={image}
        style={{
          minWidth: "100vw",
        }}
        alt="Earth"
      />
    </div>
  )
}

export default Earth