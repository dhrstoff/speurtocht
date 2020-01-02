import React, { useState } from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
  const [input, setInput] = useState(''); // '' is the initial state value
  return (
    <Layout>
      <SEO title="Home" />
      <div><input value={input} onInput={e => setInput(e.target.value)}/>
      <button onClick={() => { magic(input) }}>Woosh</button></div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

function magic(url) {
  if (url === 'koekjes') {
    navigate(url);
  } else {
    alert(`${url} is niet de spreuk die je zoekt`);
  }
}

export default IndexPage
