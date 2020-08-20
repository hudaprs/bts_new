import React from "react"
import IndustryWhatWeDoImage from "../../../assets/img/Industry/WhatWeDo.png"

const IndustryWhatWeDo = () => {
  return (
    <div className='wrapper font-primary hidden md:block'>
      <h3 className='text-center md:text-left text-2xl md:text-3xl xl:text-5xl mb-6'>
        What <strong>We Do</strong>
      </h3>

      {/*	List Menu */}
      <ul className='grid grid-cols-5 text-center text-sm justify-center items-center gap-2 break-all'>
        <li style={styles.active}>
          <a href='#!'>Manufacturing</a>
        </li>
        <li>
          <a href='#!'>E-commerce</a>
        </li>
        <li>
          <a href='#!'>Financial</a>
        </li>
        <li>
          <a href='#!'>Education</a>
        </li>
        <li>
          <a href='#!'>Logistic</a>
        </li>
      </ul>

      {/*	What We Do Content */}
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 mt-8'>
        <div>
          <img
            src={IndustryWhatWeDoImage}
            alt='Industry Solution'
            className='rounded hidden md:block'
          />
        </div>

        <div className='flex flex-col justify-around items-center'>
          <h3 className='text-center md:text-left text-2xl md:text-3xl xl:text-5xl w-full xl:mb-16'>
            About <strong>Manufacturing</strong>
          </h3>

          <p className='leading-loose text-justify text-sm md:text-xs xl:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit.
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  active: {
    borderBottom: "3px #B22026 solid",
    padding: "20px",
    transition: ".5"
  }
}

export default IndustryWhatWeDo
