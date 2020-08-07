import React from "react"

// Images
import BlogShowcaseImage from "../../../assets/img/Blog/BlogShowcase.png"

const BlogShowcase = () => {
  return (
    <div className='showcase font-primary text-white ' style={styles.showcase}>
      {/* Showcase Container */}
      <div
        className='flex md:grid px-6 md:px-32 md:grid-cols-2 justify-center items-center relative'
        style={{ height: "100vh" }}
      >
        {/* Showcase Content */}
        <div className='z-10'>
          <div className='flex'>
            {/* Line */}
            <div className='hidden md:block bg-white h-24 w-3 border border-white mr-10' />
            <div>
              <h1 className='text-5xl md:text-6xl mb-4'>
                <strong>Blog</strong>
              </h1>
              <p className='leading-loose hidden md:block'>
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
    background: `url(${BlogShowcaseImage}) no-repeat center center/cover`
  },
  btnShowcaseContainer: {
    width: "198px",
    height: "52px"
  }
}

export default BlogShowcase
