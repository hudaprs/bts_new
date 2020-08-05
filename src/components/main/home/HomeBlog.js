import React from "react"

const HomeBlog = () => {
  return (
    <div className='px-6 md:px-24 py-10 font-primary font-hairline' id='blog'>
      {/* Header */}
      <div className='flex flex-col md:flex-row items-center mb-6'>
        <h3 className='text-center text-2xl md:text-5xl'>
          Our Latest <strong>Blog Post</strong>
        </h3>
        <div className='border border-primary h-0  mx-4 flex relative justify-between items-center w-full md:max-w-2xl mt-2'>
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
      <div className='mt-4 grid grid-cols-1 items-center justify-center md:grid-cols-3 gap-5'>
        <div className='blog-item'>
          <img
            src={require("../../../assets/img/Home/Blog/Blog1.png")}
            alt='Blog1'
          />
          <h6 className='text-justify text-xl font-default mt-2'>
            Aplikasi ERP Pada Rumah Sakit
          </h6>
          <p className='text-justify my-4 leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href='#!' className='btn hover:bg-white hover:text-primary'>
            Read More
          </a>
        </div>

        <div className='blog-item'>
          <img
            src={require("../../../assets/img/Home/Blog/Blog2.png")}
            alt='Blog2'
          />
          <h6 className='md:text-justify text-xl font-default mt-2'>
            Aplikasi ERP Pada Rumah Sakit
          </h6>
          <p className='text-justify my-4 leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href='#!' className='btn hover:bg-white hover:text-primary'>
            Read More
          </a>
        </div>

        <div className='blog-item'>
          <img
            src={require("../../../assets/img/Home/Blog/Blog3.png")}
            alt='Blog3'
          />
          <h6 className='text-justify text-xl font-default mt-2'>
            Aplikasi ERP Pada Rumah Sakit
          </h6>
          <p className='text-justify my-4 leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href='#!' className='btn hover:bg-white hover:text-primary'>
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeBlog
