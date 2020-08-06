import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const location = window.location.href.split("/")[3]
  const [toggleNav, setToggleNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll animation for navbar
  const onScroll = () => {
    if (window.pageYOffset > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  })

  return (
    <nav
      className={`w-full z-50 fixed overflow-scroll md:overflow-hidden bg-${
        scrolled || toggleNav ? "dark-with-opacity" : "dark-transparent"
      } text-white text-sm font-default font-hairline`}
      style={toggleNav ? styles.navbarResponsive : styles.navbar}
    >
      <div className='px-6 md:px-32 pt-6 m-auto flex justify-between items-center'>
        <Link to='/' className='cursor-pointer'>
          <img
            src={require("../../../assets/img/Navbar/NavbarLogo.png")}
            alt='BTS.id'
            style={styles.navbarLogo}
          />
        </Link>

        <div
          className='cursor-pointer burger md:hidden mr-2'
          onClick={() => setToggleNav(!toggleNav)}
        >
          <div className={`${toggleNav ? 'line-1' : ''}`}></div>
          <div className={`${toggleNav ? 'line-2' : ''}`}></div>
          <div className={`${toggleNav ? 'line-3' : ''}`}></div>
        </div>

        <ul
          className={`md:flex ${toggleNav ? "nav-item text-lg" : "hidden"}`}
          style={toggleNav ? styles.navLinksResponsive : null}
        >
          <li
            className={`ml-16 ${location === "services" ? "current" : ""} p-2`}
            style={toggleNav ? styles.navLinksItem : null}
          >
            <Link to='/services'>Services</Link>
          </li>
          <li
            className={`ml-16 ${
              location === "industries" ? "current" : ""
            } p-2`}
            style={toggleNav ? styles.navLinksItem : null}
          >
            <Link to='/industries'>Industries</Link>
          </li>
          <li
            className={`ml-16 ${
              location === "portfolios" ? "current" : ""
            } p-2`}
            style={toggleNav ? styles.navLinksItem : null}
          >
            <Link to='#!'>Portfolio</Link>
          </li>
          <li
            className={`ml-16 ${location === "blog" ? "current" : ""} p-2`}
            style={toggleNav ? styles.navLinksItem : null}
          >
            <Link to='#!'>Blog</Link>
          </li>
          <li
            className={`ml-16 ${location === "companies" ? "current" : ""} p-2`}
            style={toggleNav ? styles.navLinksItem : null}
          >
            <Link to='#!'>Companies</Link>
          </li>
          <li
            className={`ml-16 ${location === "search" ? "current" : ""} p-2`}
            style={toggleNav ? styles.navLinksItem : null}
          >
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
    right: "27px",
    transition: " 0.5s",
    width: "100%"
  },
  navLinksItem: {
    marginTop: "10px",
    marginBottom: "20px"
  }
}

export default Navbar
