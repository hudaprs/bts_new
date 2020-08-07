import React from "react"

// Images
import LearningSystemImage from "../../../assets/img/Portfolio/LearningSystem.png"
import POSImage from "../../../assets/img/Portfolio/POS.png"
import MaintenanceImage from "../../../assets/img/Portfolio/Maintenance.png"
import AssetTrackerImage from "../../../assets/img/Portfolio/AssetTracker.png"
import ECommerceImage from "../../../assets/img/Portfolio/ECommerce.png"
import SalesForceAutomationImage from "../../../assets/img/Portfolio/SalesForceAutomation.png"
import SearchIcon from "../../../assets/img/Portfolio/SearchIcon.svg"

const PortfolioList = () => {
  return (
    <div className='px-6 md:px-24 py-10 font-primary'>
      {/* Forms */}
      <form action='#' className='flex justify-center md:justify-start'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-64 relative'>
            <img
              src={SearchIcon}
              alt='Search'
              className='absolute'
              style={{ left: "10px", top: "5px" }}
            />
            <input
              className='border border-gray-200 w-full rounded px-10 py-2 leading-tight mb-4'
              id='grid-last-name'
              type='text'
              placeholder='Search'
            />
          </div>
          <div className='inline-block relative w-64 md:ml-8'>
            <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
              <option value='' defaultValue>
                Select Industries
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div
              className='pointer-events-none absolute top-0 right-0 flex items-center px-2 text-gray-700'
              style={{ bottom: "15px" }}
              id='select-input-portfolio'
            >
              <div className='fas fa-chevron-down text-primary'></div>
            </div>
          </div>
        </div>
      </form>

      {/* Portfolio List */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 mb-4 text-center md:text-left'>
        <div className='blog-item'>
          <img src={LearningSystemImage} alt='Learning System' />
          <h6 className='text-xl font-default mt-4'>
            Learning System Management
          </h6>
          <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href='#!' className='btn hover:bg-white hover:text-primary mt-4'>
            Read More
          </a>
        </div>

        <div className='blog-item'>
          <img src={POSImage} alt='Point Of Sales' />
          <h6 className='text-xl font-default mt-4'>Point Of Sales</h6>
          <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href='#!' className='btn hover:bg-white hover:text-primary mt-4'>
            Read More
          </a>
        </div>

        <div className='blog-item'>
          <img src={MaintenanceImage} alt='Maintenance Management System' />
          <h6 className='text-xl font-default mt-4'>
            Maintenance Management System
          </h6>
          <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href='#!' className='btn hover:bg-white hover:text-primary mt-4'>
            Read More
          </a>
        </div>

        <div className='blog-item'>
          <img src={AssetTrackerImage} alt='Asset Tracker' />
          <h6 className='text-xl font-default mt-4'>Asset Tracker</h6>
          <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href='#!' className='btn hover:bg-white hover:text-primary mt-4'>
            Read More
          </a>
        </div>

        <div className='blog-item'>
          <img src={ECommerceImage} alt='E-Commerce' />
          <h6 className='text-xl font-default mt-4'>E-Commerce</h6>
          <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href='#!' className='btn hover:bg-white hover:text-primary mt-4'>
            Read More
          </a>
        </div>

        <div className='blog-item'>
          <img src={SalesForceAutomationImage} alt='Sales Force Automation' />
          <h6 className='text-xl font-default mt-4'>Sales Force Automation</h6>
          <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href='#!' className='btn hover:bg-white hover:text-primary mt-4'>
            Read More
          </a>
        </div>
      </div>

      {/* Pagination */}
      <ul className='pagination justify-center md:justify-start mt-16'>
        <li className='active mr-8'>
          <a href='#!'>
            <span className='fas fa-chevron-left'></span>
          </a>
        </li>

        <li className='active ml-2 hover:bg-primary hover:border-0'>
          <a href='#!'>1</a>
        </li>
        <li className='ml-2 hover:bg-primary hover:border-0'>
          <a href='#!'>2</a>
        </li>
        <li className='ml-2 hover:bg-primary hover:border-0'>
          <a href='#!'>3</a>
        </li>

        <li className='active ml-8'>
          <a href='#!'>
            <span className='fas fa-chevron-right'></span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default PortfolioList
