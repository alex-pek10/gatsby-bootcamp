import React from "react"

import "../styles/main.scss"

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
