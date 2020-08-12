import React from "react"
import Slider from "react-slick"
import sliderSetting from "../../../utils/slider-setting"

const TechExpertise = () => {
  return (
    <div className='px-6 md:px-24 py-10 font-primary' id='tech-expertise'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          {/* Header */}
          <div className='flex flex-col md:flex-row items-center mb-6'>
            <h3 className='text-center text-2xl md:text-5xl w-full md:w-7/12'>
              Tech <strong>Expertise</strong>
            </h3>
            <div className='border border-primary h-0  mx-4 flex relative justify-between items-center w-full md:w-5/12 mt-2'>
              <div
                className='bg-primary rounded-full h-2 w-2 absolute'
                style={{ left: "-1px" }}
              ></div>
              <div
                className='bg-primary rounded-full h-2 w-2 absolute'
                style={{ right: "-1px" }}
              ></div>
            </div>
          </div>

          <p
            className='leading-loose text-justify hidden md:block'
            style={{ fontSize: "18px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </p>

          {/* Tech List */}
          <div className='items-center justify-between tech-list'>
            <Slider {...sliderSetting(4)}>
              <img
                src={require("../../../assets/img/Home/TechExpertise/Node.png")}
                alt='Node'
              />
              <img
                src={require("../../../assets/img/Home/TechExpertise/React.png")}
                alt='React'
              />
              <img
                src={require("../../../assets/img/Home/TechExpertise/Xamarin.png")}
                alt='Xamarin'
              />
              <img
                src={require("../../../assets/img/Home/TechExpertise/Angular.png")}
                alt='Angular'
              />
            </Slider>
          </div>
        </div>

        <div className='hidden md:block'>
          <img
            src={require("../../../assets/img/Home/TechExpertise/1.png")}
            alt='Tech Expertise'
            className='rounded'
            style={styles.techExpertiseImg}
          />
        </div>
      </div>
    </div>
  )
}

const styles = {
  techExpertiseImg: {
    width: "573px",
    height: "396px"
  }
}

export default TechExpertise
