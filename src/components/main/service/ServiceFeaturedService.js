import React from "react"

const ServiceFeaturedService = () => {
  return (
    <div className='px-6 md:px-24 py-10 font-primary'>
      <h3 className='text-center text-2xl md:text-5xl mb-8'>
        Featured <strong>Service</strong>
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
        <div className='card px-8 py-16'>
          <img
            src={require("../../../assets/img/Home/Services/Comperhensive.png")}
            alt='Comprehensive'
            style={styles.featuredServiceImg}
            className='mb-8'
          />
          <div className='box-title mb-2'>
            <h3 className='font-default font-normal text-base md:text-xl'>
              Comprehensive IT
            </h3>
            <h3 className='font-default font-normal text-base md:text-xl'>
              Manage Service
            </h3>
          </div>
          <p className='card-text leading-loose mt-8'>
            We Make and Managing Application Workloads in Remote Offices.
            Transforming Remote or Branch Office Management. We offer you
            flexible choices, development or do outsourcing.
          </p>
        </div>

        <div className='card px-8 py-16'>
          <img
            src={require("../../../assets/img/Home/Services/Development.png")}
            alt='Development'
            style={styles.featuredServiceImg}
            className='mb-8'
          />
          <div className='box-title mb-2'>
            <h3 className='font-default font-normal text-base md:text-xl'>
              Web & Mobile
            </h3>
            <h3 className='font-default font-normal text-base md:text-xl'>
              Development
            </h3>
          </div>
          <p className='card-text leading-loose mt-8'>
            Make your brand growth up with us. Planning analyst (UI UX design,
            Coding, Testing). Application design that supports your business
            goals. Optimization Process, and Offline Integration.
          </p>
        </div>

        <div className='card px-8 py-16'>
          <img
            src={require("../../../assets/img/Home/Services/Cloud.png")}
            alt='cloud'
            style={styles.featuredServiceImg}
            className='mb-8'
          />
          <div className='box-title mb-2'>
            <h3 className='font-default font-normal text-base md:text-xl'>
              Cloud Integration
            </h3>
          </div>
          <p className='card-text leading-loose mt-8'>
            Cloud controls applied. Data management at the local level with the
            highest security. With us, you can Reduced Costs, Reduced Risk, and
            Increased Application Availability.
          </p>
        </div>

        <div className='card px-8 py-16'>
          <img
            src={require("../../../assets/img/Home/Services/Data.png")}
            alt='Business'
            style={styles.featuredServiceImg}
            className='mb-8'
          />
          <div className='box-title mb-2'>
            <h3 className='font-default font-normal text-base md:text-xl'>
              Business
            </h3>
            <h3 className='font-default font-normal text-base md:text-xl'>
              Intelligence, Big Data
            </h3>
          </div>
          <p className='card-text leading-loose mt-8'>
            Learn how can you capture, analyze and glean actionable insight from
            the layers of security protecting your enterprise with us.
          </p>
        </div>

        <div className='card px-8 py-16'>
          <img
            src={require("../../../assets/img/Home/Services/Management.png")}
            alt='Management'
            style={styles.featuredServiceImg}
            className='mb-8'
          />
          <div className='box-title mb-2'>
            <h3 className='font-default font-normal text-base md:text-xl'>
              Management
            </h3>
            <h3 className='font-default font-normal text-base md:text-xl'>
              Consulting & Business Services
            </h3>
          </div>
          <p className='card-text leading-loose mt-8'>
            Full support from our expert people. Lead the potential and achieve
            the goal with us.
          </p>
        </div>

        <div className='card px-8 py-16'>
          <img
            src={require("../../../assets/img/Home/Services/Todo.png")}
            alt='Listen'
            style={styles.featuredServiceImg}
            className='mb-8'
          />
          <div className='box-title mb-2'>
            <h3 className='font-default font-normal text-base md:text-xl'>
              More than What
            </h3>
            <h3 className='font-default font-normal text-base md:text-xl'>
              Listed
            </h3>
          </div>
          <p className='card-text leading-loose mt-8'>
            Big revenue will bring good resonation. We believe higher insight
            will bring you an excellent choice.
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  featuredServiceImg: {
    width: "80px",
    heigth: "80px"
  }
}

export default ServiceFeaturedService
