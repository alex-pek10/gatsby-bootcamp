import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const PageLayout = props => {
  return (
    <>
      <Header />

      {props.children}

      <Footer />
    </>
  )
}

export default PageLayout