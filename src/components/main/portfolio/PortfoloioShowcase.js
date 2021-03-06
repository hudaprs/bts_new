import React from "react"

// Images
import PortfolioShowcaseImage from "../../../assets/img/Portfolio/PortfolioShowcase.jpg"

const PortfolioShowcase = () => {
  return (
    <div className='showcase ' style={styles.showcase}>
      {/* Showcase Container */}
      <div className='showcase-container'>
        {/* Showcase Content */}
        <div className='showcase-content'>
          <div className='flex'>
            {/* Line */}
            <div className='showcase-left-line' />
            <div>
              <h1 className='showcase-title'>
                <strong>Portfolio</strong>
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
    background: `url(${PortfolioShowcaseImage}) no-repeat center center/cover`
  }
}

export default PortfolioShowcase
