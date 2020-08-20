import React from "react"

const BlogRecentArticleForm = () => {
  return (
    <div className='inline-block relative w-full'>
      <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
        <option value='' defaultValue>
          Select Categories
        </option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <div className='fas fa-chevron-down text-primary'></div>
      </div>
    </div>
  )
}

export default BlogRecentArticleForm
