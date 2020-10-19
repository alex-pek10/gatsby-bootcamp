import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const BlogPage = () => {
  return (
    <>
      <Header />

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
