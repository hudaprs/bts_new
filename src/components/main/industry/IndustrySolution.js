import React from "react"

import IndustrySolutionImage from "../../../assets/img/Industry/Solution.png"

const IndustrySolution = () => {
  return (
    <div className='px-6 md:px-24 py-10 font-primary'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10'>
        <div>
          <h3 className='text-center md:text-left text-2xl md:text-3xl xl:text-5xl w-full mb-6	'>
            Our Solution as <strong>System Integrator</strong>
          </h3>

          <p className='leading-loose text-justify text-sm md:text-xs xl:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
        </div>
        <div>
          <img
            src={IndustrySolutionImage}
            alt='Industry Solution'
            className='rounded hidden md:block'
          />
        </div>
      </div>
    </div>
  )
}

export default IndustrySolution
