import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../../images/img4.png"
import Image from "gatsby-plugin-image"

const Images = () => {
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
      </article>
    </section>
  )
}

export default Images
