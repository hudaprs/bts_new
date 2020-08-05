import React, { Fragment } from "react"
import Navbar from "../inc/main/Navbar"
import Footer from "../inc/main/Footer"

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>

      {children}

      <Footer />
    </Fragment>
  )
}

export default MainLayout
