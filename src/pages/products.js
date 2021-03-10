import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
export default class products extends Component {
  render() {
    return (
      <Layout>
          <div className={styles.page}>

        <h1>This is our products page</h1>
        <p >
          George, aren't you gonna kiss me? Pa, what is it? What is it, Pa?
          What? Hey, George, buddy, you weren't at school, what have you been
          doing all day? Alright, okay Jennifer. What if I send in the tape and
          they don't like it. I mean, what if they say I'm no good. What if they
          say, 'Get out of here, kid, you got no future.' I mean, I just don't
          think I can take that kind of rejection. Jesus, I'm beginning to sound
          like my old man.
        </p>
          </div>
      </Layout>
    )
  }
}
