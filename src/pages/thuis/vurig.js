import React from "react"
import SEO from "../../components/seo"
import image from "../../images/thuis11.jpg"

const Fire = () => {
  return (
    <div>
      <SEO title="Fire" />
      <h1 style={{ margin: "1rem" }}>Combined</h1>
      <img
        src={image}
        style={{
          minWidth: "100vw",
        }}
        alt="vurig"
      />
    </div>
  )
}

export default Fire
