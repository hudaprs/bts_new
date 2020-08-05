import React from "react"
import { Link } from "react-router-dom"

const HomeServices = () => {
  return (
    <div
      className='px-16 md:px-20 py-10 font-primary text-center'
      id='home-service'
    >
      <div className='home-service-box item-1'>
        <img
          src={require("../../../assets/img/Home/Services/Comperhensive.png")}
          alt='Logo1'
          className='home-service-logo'
        />
        <p>Comprehensive IT Manage Service</p>
      </div>

      <div className='home-service-box item-2'>
        <img
          src={require("../../../assets/img/Home/Services/Cloud.png")}
          alt='Logo5'
          className='home-service-logo'
        />
        <p>Cloud Integration</p>
      </div>

      <div className='home-service-box item-3'>
        <img
          src={require("../../../assets/img/Home/Services/Management.png")}
          alt='Logo3'
          className='home-service-logo'
        />
        <p>Management Consulting & Business Services</p>
      </div>

      <div className='services-title text-center' id='home-service-title'>
        <div>
          <h3 className='text-4xl md:text-5xl mb-4'>
            Our <strong>Services</strong>
          </h3>
          <Link to='#!' className='bg-primary py-3 px-5 rounded'>
            KNOW MORE
          </Link>
        </div>
      </div>

      <div className='home-service-box item-4'>
        <img
          src={require("../../../assets/img/Home/Services/Development.png")}
          alt='Logo4'
          className='home-service-logo'
        />
        <p>Web & Mobile Development</p>
      </div>

      <div className='home-service-box item-5'>
        <img
          src={require("../../../assets/img/Home/Services/Data.png")}
          alt='Logo5'
          className='home-service-logo'
        />
        <p>Business Intelligence, Big Data</p>
      </div>

      <div className='home-service-box item-6'>
        <img
          src={require("../../../assets/img/Home/Services/Todo.png")}
          alt='Logo6'
          className='home-service-logo'
        />
        <p>More than What Listed</p>
      </div>
    </div>
  )
}

export default HomeServices
