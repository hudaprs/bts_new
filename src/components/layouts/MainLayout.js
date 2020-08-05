import React, { Fragment } from "react"
import Navbar from "../inc/main/Navbar"

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>

      {children}
    </Fragment>
  )
}

export default MainLayout
