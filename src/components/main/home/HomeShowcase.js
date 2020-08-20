import React from "react"
import { Link } from "react-router-dom"

// Images
import HomeShowcaseImage from "../../../assets/img/Home/Showcase.png"
import ArrowRightIcon from "../../../assets/img/ArrowRightIcon.png"
import ChatIcon from "../../../assets/img/ChatIcon.svg"
import MouseIcon from "../../../assets/img/MouseIcon.svg"

const HomeShowcase = () => {
  return (
    <div className='showcase font-primary text-white' style={styles.showcase}>
      {/* Showcase Container */}
      <div
        className='px-6 md:px-32 flex md:grid md:grid-cols-2 justify-center items-center relative'
        style={{ height: "100vh" }}
      >
        {/* Showcase Content */}
        <div className='z-10'>
          <div className='hidden xl:block w-32 bg-white h-2 border border-white mb-6'></div>
          <h1 className='text-3xl md:text-5xl xl:text-6xl md:mt-10 text-center md:text-left'>
            System <strong>Integrator</strong>
          </h1>
          <p className='leading-loose hidden md:block xl:block overflow-x-hidden '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          {/* Buttons */}
          <div
            className='hidden md:block relative md:mt-6 xl:mt-20'
            style={styles.btnShowcaseContainer}
          >
            <Link
              to='#!'
              className='bg-primary text-white rounded uppercase inline-block text-center p-3 h-full w-full'
            >
              <span className='mr-6'>Know More</span>
            </Link>
            <Link
              to='#!'
              className='absolute h-full w-10 rounded pl-2 pt-3 rounded-bl-none rounded-tl-none right-0 bg-secondary text-center '
            >
              <img src={ArrowRightIcon} alt='Right' />
            </Link>
          </div>

          {/* Chat Icon */}
          <img
            src={ChatIcon}
            className='fixed bottom-0 right-0 mb-4 mr-4'
            alt='Chat'
          />

          {/* Scroll To Bottom */}
          <img
            src={MouseIcon}
            className='hidden absolute bottom-0 md:hidden lg:hidden xl:block'
            style={{
              left: "49%"
            }}
            alt='Mouse'
          />
        </div>
      </div>
    </div>
  )
}

const styles = {
  showcase: {
    background: `url(${HomeShowcaseImage}) no-repeat center center/cover`
  },
  btnShowcaseContainer: {
    width: "198px",
    height: "52px"
  }
}

export default HomeShowcase
