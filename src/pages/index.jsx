import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const HomePage = () => {
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
        <h1>Hello!</h1>
        <p>I'm Alex, a full-stack developer living in Columbus, Ohio.</p>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default HomePage
