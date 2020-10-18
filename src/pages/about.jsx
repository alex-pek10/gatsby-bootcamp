import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"


const AboutPage = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>

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
