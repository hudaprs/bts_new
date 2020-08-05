import React from "react"

const HomeServices = () => {
  return (
    <div className='px-20 py-10 font-primary text-center' id='home-service'>
      <div className='home-service-box item-1'>
        <img
          src={require("../../../assets/img/Home/Services/Comperhensive.png")}
          alt='Logo1'
          className='home-service-logo'
        />
        <p className='lead'>Comprehensive IT Manage Service</p>
      </div>

      <div className='home-service-box item-2'>
        <img
          src={require("../../../assets/img/Home/Services/Cloud.png")}
          alt='Logo5'
          className='home-service-logo'
        />
        <p className='lead'>Cloud Integration</p>
      </div>

      <div className='home-service-box item-3'>
        <img
          src={require("../../../assets/img/Home/Services/Management.png")}
          alt='Logo3'
          className='home-service-logo'
        />
        <p className='lead'>Management Consulting & Business Services</p>
      </div>

      <div className='services-title text-center' id='home-service-title'>
        <div>
          <h3 className='text-4xl md:text-5xl'>
            Our <strong>Services</strong>
          </h3>
          <a href='#!' className='btn btn-primary mb-4'>
            Know More
          </a>
        </div>
      </div>

      <div className='home-service-box item-4'>
        <img
          src={require("../../../assets/img/Home/Services/Development.png")}
          alt='Logo4'
          className='home-service-logo'
        />
        <p className='lead'>Web & Mobile Development</p>
      </div>

      <div className='home-service-box item-5'>
        <img
          src={require("../../../assets/img/Home/Services/Data.png")}
          alt='Logo5'
          className='home-service-logo'
        />
        <p className='lead'>Business Intelligence, Big Data</p>
      </div>

      <div className='home-service-box item-6'>
        <img
          src={require("../../../assets/img/Home/Services/Todo.png")}
          alt='Logo6'
          className='home-service-logo'
        />
        <p className='lead'>More than What Listed</p>
      </div>
    </div>
  )
}

export default HomeServices
