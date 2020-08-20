import React from "react"

const IndustryWhatWeOffer = () => {
  return (
    <div className='px-6 md:px-24 py-10 font-primary'>
      <h3 className='text-center md:text-left text-2xl md:text-3xl xl:text-5xl mb-6'>
        What <strong>We Offer</strong>
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-10'>
        <div className='card p-10'>
          <img
            src={require("../../../assets/img/Home/Services/Comperhensive.png")}
            alt='Logo1'
            className='home-service-logo'
            style={styles.whatWeOfferImg}
          />
          <h3 className='text-text-center md:text-left text-base md:text-xl mb-4'>
            Manufacturing Bussiness Solution
          </h3>
          <p className='card-text leading-loose my-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation
          </p>
          <button
            type='submit'
            className='bg-primary px-4 py-2 text-sm uppercase rounded mt-4 transition ease-in duration-500 hover:bg-white hover:text-primary'
          >
            Read More
          </button>
        </div>

        <div className='card p-10'>
          <img
            src={require("../../../assets/img/Home/Services/Comperhensive.png")}
            alt='Logo1'
            className='home-service-logo'
            style={styles.whatWeOfferImg}
          />
          <h3 className='text-text-center md:text-left text-base md:text-xl mb-4'>
            Manufacturing Bussiness Solution
          </h3>
          <p className='card-text leading-loose my-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation
          </p>
          <button
            type='submit'
            className='bg-primary px-4 py-2 text-sm uppercase rounded mt-4 transition ease-in duration-500 hover:bg-white hover:text-primary'
          >
            Read More
          </button>
        </div>

        <div className='card p-10'>
          <img
            src={require("../../../assets/img/Home/Services/Comperhensive.png")}
            alt='Logo1'
            className='home-service-logo'
            style={styles.whatWeOfferImg}
          />
          <h3 className='text-text-center md:text-left text-base md:text-xl mb-4'>
            Manufacturing Bussiness Solution
          </h3>
          <p className='card-text leading-loose my-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation
          </p>
          <button
            type='submit'
            className='bg-primary px-4 py-2 text-sm uppercase rounded mt-4 transition ease-in duration-500 hover:bg-white hover:text-primary'
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  whatWeOfferImg: {
    width: "100px",
    height: "100px"
  }
}

export default IndustryWhatWeOffer
