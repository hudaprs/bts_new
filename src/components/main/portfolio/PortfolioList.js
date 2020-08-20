import React from "react"

// Components
import PortfolioListForm from "./PortfolioListForm"

// Images
import LearningSystemImage from "../../../assets/img/Portfolio/LearningSystem.png"
import POSImage from "../../../assets/img/Portfolio/POS.png"
import MaintenanceImage from "../../../assets/img/Portfolio/Maintenance.png"
import AssetTrackerImage from "../../../assets/img/Portfolio/AssetTracker.png"
import ECommerceImage from "../../../assets/img/Portfolio/ECommerce.png"
import SalesForceAutomationImage from "../../../assets/img/Portfolio/SalesForceAutomation.png"

const PortfolioList = () => {
  return (
    <div className='wrapper font-primary'>
      {/* Forms */}
      <PortfolioListForm />

      {/* Portfolio List */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-8 mb-4 text-center md:text-left'>
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
