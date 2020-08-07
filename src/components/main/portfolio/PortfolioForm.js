import React from "react"

const PortfolioForm = () => {
  return (
    <div className='px-6 md:px-24 py-10 font-primary'>
      <h3 className='text-center md:text-left text-4xl md:text-5xl mb-8'>
        Start A <strong>Project</strong>
      </h3>
      <form action='#'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='w-full'>
            <label
              className='block uppercase tracking-wide text-white text-xs font-bold mb-2'
              htmlFor='name'
            >
              Name <span className='text-primary'>*</span>
            </label>
            <input
              className='w-full text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='name'
              type='text'
              placeholder='Enter Name'
            />
          </div>

          <div className='w-full'>
            <label
              className='block uppercase tracking-wide text-white text-xs font-bold mb-2'
              htmlFor='email'
            >
              Email <span className='text-primary'>*</span>
            </label>
            <input
              className='w-full text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='email'
              type='email'
              placeholder='Enter Email'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-12'>
          <div className='w-full'>
            <label
              className='block uppercase tracking-wide text-white text-xs font-bold mb-2'
              htmlFor='phone'
            >
              Phone Number <span className='text-primary'>*</span>
            </label>
            <input
              className='w-full text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='phone'
              type='text'
              placeholder='Enter Phone Number'
            />
          </div>

          <div className='w-full'>
            <label
              className='block uppercase tracking-wide text-white text-xs font-bold mb-2'
              htmlFor='company'
            >
              Company Name <span className='text-primary'>*</span>
            </label>
            <input
              className='w-full text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='company'
              type='text'
              placeholder='Enter Company Name'
            />
          </div>
        </div>

        {/* CheckBoxes */}
        <div className='mt-6'>
          <label
            className='block uppercase tracking-wide text-white text-xs font-bold mb-4'
            htmlFor='phone'
          >
            Service Needed <span className='text-primary'>*</span>
          </label>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-sm w-full md:w-2/4'>
            <div>
              <input type='checkbox' value='Web Development' />{" "}
              <span>Web Development</span>
            </div>
            <div>
              <input type='checkbox' value='Bussiness Intelligence, Big Data' />{" "}
              <span>Bussiness Intelligence, Big Data</span>
            </div>
            <div>
              <input type='checkbox' value='IT Manage Service' />{" "}
              <span>IT Manage Service</span>
            </div>
            <div>
              <input type='checkbox' value='Mobile Development' />{" "}
              <span>Mobile Development</span>
            </div>
            <div>
              <input type='checkbox' value='Cloud Integration' />{" "}
              <span>Cloud Integration</span>
            </div>
            <div>
              <input type='checkbox' value='Consulting' />{" "}
              <span>Consulting</span>
            </div>
          </div>
        </div>

        <div className='w-full mt-6'>
          <label
            className='block uppercase tracking-wide text-xs font-bold mb-2'
            htmlFor='message'
          >
            Message <span className='text-primary'>*</span>
          </label>
          <textarea
            className='w-full text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='message'
            type='email'
            placeholder='Enter Message'
          ></textarea>
        </div>

        <button
          type='submit'
          className='bg-primary text-white px-6 py-2 w-32 rounded mt-6 transition duration-500 hover:bg-white hover:text-primary'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default PortfolioForm
