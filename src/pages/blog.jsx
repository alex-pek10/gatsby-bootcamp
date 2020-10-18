import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const BlogPage = () => {
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
        <h1>Blog</h1>
        <p>A list of posts will be here.</p>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default BlogPage
