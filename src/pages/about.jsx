import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <>
      <Header />

      {/* MAIN CONTENT */}
      <main>
        <h1>About</h1>
        <p>A little information about who I am and what I do...</p>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default AboutPage
