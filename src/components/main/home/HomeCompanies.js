import React from "react"
import Slider from "react-slick"
import sliderSetting from "../../../utils/slider-setting"

const HomeCompanies = () => {
  return (
    <div
      className='px-6 md:px-24 text-center font-primary py-10'
      id='companies'
    >
      <h3 className='text-center text-2xl md:text-5xl mb-4'>
        Companies We’ve <strong>Helped</strong>
      </h3>

      {/* Companies List Image */}
      <div className='items-center justify-between text-center company-logo-list'>
        <Slider {...sliderSetting(7)}>
          <img
            src={require("../../../assets/img/Home/Companies/KAI.png")}
            alt='KAI'
          />
          <img
            src={require("../../../assets/img/Home/Companies/ITM.png")}
            alt='ITM'
          />
          <img
            src={require("../../../assets/img/Home/Companies/BCA.png")}
            alt='BCA'
          />
          <img
            src={require("../../../assets/img/Home/Companies/Blanja.png")}
            alt='Blanja'
          />
          <img
            src={require("../../../assets/img/Home/Companies/TechMahindra.png")}
            alt='TechMahindra'
          />
          <img
            src={require("../../../assets/img/Home/Companies/Helpster.png")}
            alt='Helpster'
          />
          <img
            src={require("../../../assets/img/Home/Companies/WowBid.png")}
            alt='WowBid'
          />
        </Slider>
      </div>

      {/* Paraghraph */}
      <p className='font-hairline text-sm md:text-base text-justify leading-9 '>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.”
      </p>

      {/* Companies Name */}
      <div className='flex items-center justify-end mt-10'>
        {/* Line */}
        <div className='mr-2 rounded bg-primary border-primary border h-2 w-8 hidden md:block'></div>
        <h5 className='text-sm md:text-xl font-secondary'>
          SALMA FONSECA, PT. INDO TAMBANGRAYA MEGAH
        </h5>
      </div>

      {/* Companies Leader */}
      <div className='flex justify-center items-center mt-8 md:mt-16'>
        <img
          src={require("../../../assets/img/Home/Companies/Person1.png")}
          alt='Person1'
          className='rounded-full ml-10 hidden md:block'
          style={styles.companiesLeaderImg}
        />
        <img
          src={require("../../../assets/img/Home/Companies/Person2.png")}
          alt='Person2'
          className='rounded-full ml-10 hidden md:block'
          style={styles.companiesLeaderImg}
        />
        <img
          src={require("../../../assets/img/Home/Companies/Person3.png")}
          alt='Person3'
          className='md:ml-10 border-8 border-primary'
          style={styles.companiesLeaderImgMiddle}
        />
        <img
          src={require("../../../assets/img/Home/Companies/Person4.png")}
          alt='Person4'
          className='rounded-full ml-10 hidden md:block'
          style={styles.companiesLeaderImg}
        />
        <img
          src={require("../../../assets/img/Home/Companies/Person5.png")}
          alt='Person5'
          className='rounded-full ml-10 hidden md:block'
          style={styles.companiesLeaderImg}
        />
      </div>
    </div>
  )
}

const styles = {
  companiesLeaderImg: {
    width: "50px",
    height: "50px"
  },
  companiesLeaderImgMiddle: {
    width: "80px",
    height: "80px",
    // border: "10px #b22026 solid",
    borderRadius: "50%"
  }
}

export default HomeCompanies
