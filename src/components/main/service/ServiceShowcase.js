import React from 'react'

// Images
import ServiceShowcaseImage from '../../../assets/img/Service/Service.png'

const ServiceShowcase = () => {
  return (
    <div className='showcase' style={styles.showcase} id='service-showcase'>
      {/* Showcase Container */}
      <div className='showcase-container'>
        {/* Showcase Content */}
        <div className='z-10 md:mt-8'>
          <div className='flex'>
            {/* Line */}
            <div className='showcase-left-line' />
            <div>
              <h1 className='showcase-title'>
                <strong>Services</strong>
              </h1>
              <p className='showcase-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  showcase: {
    background: `url(${ServiceShowcaseImage}) no-repeat center center/cover`
  }
}

export default ServiceShowcase
