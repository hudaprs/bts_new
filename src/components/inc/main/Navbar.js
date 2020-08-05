import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <nav
      className='w-full z-50 fixed bg-dark-with-opacity text-white text-sm font-default font-hairline'
      style={toggleNav ? styles.navbarResponsive : styles.navbar}
    >
      <div className='px-20 pt-6 m-auto flex justify-between items-center'>
        <img
          src={require("../../../assets/img/Navbar/NavbarLogo.png")}
          alt='BTS.id'
          style={styles.navbarLogo}
        />

        <div
          className='cursor-pointer md:hidden'
          onClick={() => setToggleNav(!toggleNav)}
        >
          <span className='fas fa-bars fa-2x'></span>
        </div>

        <ul
          className={`md:flex ${toggleNav ? "" : "hidden"}`}
          style={toggleNav ? styles.navLinksResponsive : null}
        >
          <li className='ml-16' style={toggleNav ? styles.navLinksItem : null}>
            <Link to='#!'>Services</Link>
          </li>
          <li className='ml-16' style={toggleNav ? styles.navLinksItem : null}>
            <Link to='#!'>Industries</Link>
          </li>
          <li className='ml-16' style={toggleNav ? styles.navLinksItem : null}>
            <Link to='#!'>Portfolio</Link>
          </li>
          <li className='ml-16' style={toggleNav ? styles.navLinksItem : null}>
            <Link to='#!'>Blog</Link>
          </li>
          <li className='ml-16' style={toggleNav ? styles.navLinksItem : null}>
            <Link to='#!'>Companies</Link>
          </li>
          <li className='ml-16' style={toggleNav ? styles.navLinksItem : null}>
            <Link to='#!'>
              <img
                src={require("../../../assets/img/Navbar/NavbarSearchIcon.png")}
                alt='NavbarSearch'
                className='content-center'
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const styles = {
  navbar: {
    transition: ".5s",
    height: "90px"
  },
  navbarResponsive: {
    height: "100vh",
    transition: ".5s"
  },
  navbarLogo: {
    width: "120px",
    height: "38px"
  },
  navLinksResponsive: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "70px",
    right: "25px",
    transition: " 0.5s",
    width: "100%"
  },
  navLinksItem: {
    marginTop: "10px",
    marginBottom: "20px"
  }
}

export default Navbar
