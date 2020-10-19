import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout
