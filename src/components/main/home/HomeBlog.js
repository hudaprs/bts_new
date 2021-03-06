import React from "react"

import Blog1Image from "../../../assets/img/Home/Blog/Blog1.png"
import Blog2Image from "../../../assets/img/Home/Blog/Blog2.png"
import Blog3Image from "../../../assets/img/Home/Blog/Blog3.png"

const HomeBlog = () => {
  return (
    <div className='wrapper font-primary font-hairline' id='blog'>
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-center items-center mb-6'>
        <h3 className='text-center text-3xl md:text-5xl xl:w-auto xl:text-left'>
          Our Latest <strong>Blog Post</strong>
        </h3>
        <div className='hidden xl:flex xl:justify-between border border-primary h-0  mx-4 relative  items-center w-full xl:w-7/12 mr-2 mt-2'>
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

      {/* Blog list */}
      <div className='mt-4 grid grid-cols-1 text-center md:text-left md:grid-cols-2 xl:grid-cols-3 gap-8'>
        <div className='blog-item'>
          <img src={Blog1Image} alt='Blog1' style={{ textAlign: "center" }} />
          <h6 className='text-xl font-default mt-4'>
            Aplikasi ERP Pada Rumah Sakit
          </h6>
          <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href='#!'
            className='btn-primary md:btn-primary-sm hover:bg-white hover:text-primary mt-4'
          >
            Read More
          </a>
        </div>

        <div className='blog-item'>
          <img src={Blog2Image} alt='Blog2' />
          <h6 className='text-xl font-default mt-4'>
            Aplikasi ERP Pada Rumah Sakit
          </h6>
          <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href='#!'
            className='btn-primary md:btn-primary-sm hover:bg-white hover:text-primary mt-4'
          >
            Read More
          </a>
        </div>

        <div className='blog-item'>
          <img src={Blog3Image} alt='Blog3' />
          <h6 className='text-xl font-default mt-4'>
            Aplikasi ERP Pada Rumah Sakit
          </h6>
          <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href='#!'
            className='btn-primary md:btn-primary-sm hover:bg-white hover:text-primary mt-4'
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeBlog
