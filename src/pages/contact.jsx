import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const ContactPage = () => {
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
        <h1>Contact Me</h1>
        <p>Here's how you can reach me...</p>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default ContactPage
