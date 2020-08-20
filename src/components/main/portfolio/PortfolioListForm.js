import React from "react"

// Icons
import SearchIcon from "../../../assets/img/Portfolio/SearchIcon.svg"

const PortfolioListForm = () => {
  return (
    <form action='#' className='flex justify-center xl:justify-start'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-64 relative'>
          <img
            src={SearchIcon}
            alt='Search'
            className='absolute'
            style={{ left: "10px", top: "5px" }}
          />
          <input
            className='border border-gray-200 w-full rounded px-10 py-2 leading-tight mb-4'
            id='grid-last-name'
            type='text'
            placeholder='Search'
          />
        </div>
        <div className='inline-block relative w-64 md:ml-8'>
          <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
            <option value='' defaultValue>
              Select Industries
            </option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div
            className='pointer-events-none absolute top-0 right-0 flex items-center px-2 text-gray-700'
            style={{ bottom: "15px" }}
            id='select-input-portfolio'
          >
            <div className='fas fa-chevron-down text-primary'></div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PortfolioListForm
