import React from "react"

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return <footer>Copyright &copy; {getCurrentYear()} - Alex Myers</footer>
}

export default Footer
