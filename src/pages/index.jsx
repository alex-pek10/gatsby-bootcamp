import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const HomePage = () => {
  return (
    <>
      <Header />

      {/* MAIN CONTENT */}
      <main>
        <h1>Hello!</h1>
        <p>I'm Alex, a full-stack developer living in Columbus, Ohio.</p>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default HomePage
