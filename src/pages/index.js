import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MagicInput from "../components/magic-input"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Welkom!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        ullamcorper luctus urna, ac aliquet enim scelerisque eu. Sed et magna
        pellentesque, bibendum risus at, condimentum nunc. Aliquam et fringilla
        ex, vestibulum rhoncus sapien. Phasellus fringilla lectus vel lectus
        pretium, vitae ultrices sapien bibendum. Sed quis elementum purus.
        Nullam maximus eros a euismod blandit. Nunc id est nunc. Nunc convallis
        tortor quis libero rutrum, sit amet placerat sem mattis. Proin in
        egestas est. Pellentesque vitae condimentum urna. Cras tincidunt tortor
        dui, sed faucibus nulla lobortis quis. Quisque id libero vulputate,
        placerat turpis id, pretium ipsum. Suspendisse posuere orci at faucibus
        volutpat. Phasellus fringilla augue libero, nec lobortis turpis finibus
        in. Aliquam ultrices risus id euismod ultrices. Fusce nec turpis sed
        lectus ornare elementum. Donec id finibus est. Suspendisse potenti.
        Aliquam erat volutpat. Nunc id pellentesque turpis. Etiam lacinia eget
        diam quis pellentesque. Curabitur ultricies tincidunt sapien, et pretium
        libero semper sed. Nulla facilisi. Curabitur tellus neque, vestibulum et
        condimentum bibendum, eleifend sit amet odio. Proin commodo mollis ipsum
        fermentum pellentesque. Suspendisse non leo lobortis, rutrum orci non,
        vulputate nisl. Curabitur suscipit justo blandit semper pretium.
        Curabitur ullamcorper faucibus odio, sed volutpat erat cursus a. Integer
        eu quam tempus, vehicula massa laoreet, pharetra justo. Phasellus sapien
        arcu, vulputate vel quam non, laoreet pulvinar nibh. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Phasellus facilisis, felis ac vestibulum maximus, metus
        orci tristique nisi, eu fermentum elit neque luctus ipsum. Maecenas
        velit ipsum, sagittis viverra diam in, ultrices congue velit. Donec a
        commodo mi, convallis volutpat felis. Cras dapibus dapibus eros euismod
        pharetra. Vivamus et elit convallis, euismod nisi sit amet, rhoncus
        magna. Mauris volutpat erat sit amet purus elementum, vel semper metus
        iaculis. Ut condimentum nunc at malesuada ultrices. Pellentesque in
        magna at lorem venenatis consequat. Nulla mollis, justo malesuada
        pulvinar ullamcorper, eros nunc rhoncus metus, in maximus odio mi vel
        lacus. Aenean risus ex, volutpat eget neque nec, hendrerit faucibus
        velit. Vivamus sollicitudin odio eget lorem sollicitudin feugiat. Sed et
        orci ut libero aliquam luctus in eget lectus. Praesent consequat turpis
        et justo sodales dignissim. Phasellus consectetur metus in purus
        condimentum, eget tristique nulla aliquam. Morbi placerat nibh a tortor
        vulputate interdum. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Integer consequat massa eget
        metus tincidunt, sed mattis tortor ullamcorper. Phasellus vehicula nulla
        sed pretium pharetra. Curabitur dictum massa nec lorem accumsan lacinia.
      </p>

      {/* <Link to="/page-2/">Go to page 2</Link> */}
      <MagicInput />
    </Layout>
  )
}

export default IndexPage
