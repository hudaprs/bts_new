import React from "react"

// Components
import BlogMainArticle from "./BlogMainArticle"
import BlogRecentArticle from "./BlogRecentArticle"

const BlogItem = () => {
  return (
    <div className='px-6 md:px-24 py-10 font-primary'>
      <h3 className='text-center xl:text-left text-4xl md:text-5xl mb-6'>
        Our <strong>Article</strong>
      </h3>
      <div className='grid grid-cols-3 gap-10'>
        <BlogMainArticle />
        <BlogRecentArticle />
      </div>
    </div>
  )
}

export default BlogItem
