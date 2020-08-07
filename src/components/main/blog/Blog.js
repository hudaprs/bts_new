import React, { useEffect } from "react"

// Components
import MainLayout from "../../layouts/MainLayout"
import BlogShowcase from "./BlogShowcase"
import BlogItem from "./BlogItem"

const Blog = () => {
  useEffect(() => {
    document.title = "BTS.id - Blog"
  }, [])

  return (
    <MainLayout>
      <BlogShowcase />
      <BlogItem />
    </MainLayout>
  )
}

export default Blog
