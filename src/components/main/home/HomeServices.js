import React from "react"
import { Link } from "react-router-dom"

// Images
import ComperhensiveImage from "../../../assets/img/Home/Services/Comperhensive.png"
import CloudIntegrationImage from "../../../assets/img/Home/Services/Cloud.png"
import ManagementImage from "../../../assets/img/Home/Services/Management.png"
import Development from "../../../assets/img/Home/Services/Development.png"
import DataImage from "../../../assets/img/Home/Services/Data.png"
import TodoImage from "../../../assets/img/Home/Services/Todo.png"

const HomeServices = () => {
  const services = [
    {
      id: 1,
      img: ComperhensiveImage,
      title: "Comprehensive IT Manage Service"
    },
    {
      id: 2,
      img: CloudIntegrationImage,
      title: "Cloud Integration"
    },
    {
      id: 3,
      img: ManagementImage,
      title: "Management Consulting & Business Services"
    },
    {
      id: 4,
      img: Development,
      title: "Web & Mobile Development"
    },
    {
      id: 5,
      img: DataImage,
      title: "Business Intelligence, Big Data"
    },
    {
      id: 6,
      img: TodoImage,
      title: "More than What Listed"
    }
  ]

  return (
    <div className='wrapper font-primary text-center' id='home-service'>
      {services.map((service, index) => (
        <div className={`home-service-box item-${index + 1}`} key={service.id}>
          <img src={service.img} alt='Logo1' className='home-service-logo' />
          <p>{service.title}</p>
        </div>
      ))}

      <div className='services-title text-center' id='home-service-title'>
        <div>
          <h3 className='text-3xl md:text-5xl mb-4'>
            Our <strong>Services</strong>
          </h3>
          <Link
            to='#!'
            className='btn-primary uppercase hover:bg-white hover:text-primary'
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeServices
