import React from 'react'
import Header from "../components/examples/Header"
import HeaderStatic from "../components/examples/HeaderStatic"
import Layout from "../components/layout"
import {graphql} from "gatsby"


const examples = ({data}) => {
    const {site:{info:{author}}} = data
    return (
        <Layout>
            <p>hello from example page</p>
            <Header />
            <HeaderStatic />
            <h5>author: {author}</h5>
        </Layout>
    )
}

export const data = graphql`
{
    site {
      info:siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
export default examples
