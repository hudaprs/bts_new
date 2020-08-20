import React, { useState } from "react"

// Components
import BlogRecentArticleForm from "./BlogRecentArticleForm"

// Images
import RecentBlog1Image from "../../../assets/img/Blog/RecentBlog1.png"
import RecentBlog2Image from "../../../assets/img/Blog/RecentBlog2.png"
import RecentBlog3Image from "../../../assets/img/Blog/RecentBlog3.png"
import RecentBlog4Image from "../../../assets/img/Blog/RecentBlog4.png"
import RecentBlog5Image from "../../../assets/img/Blog/RecentBlog5.png"
import RecentBlog6Image from "../../../assets/img/Blog/RecentBlog6.png"

const BlogRecentArticle = () => {
  const [recents, setRecents] = useState([
    {
      id: 1,
      img: RecentBlog1Image,
      text:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem"
    },
    {
      id: 2,
      img: RecentBlog2Image,
      text:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem"
    },
    {
      id: 3,
      img: RecentBlog3Image,
      text:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem"
    },
    {
      id: 4,
      img: RecentBlog4Image,
      text:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem"
    },
    {
      id: 5,
      img: RecentBlog5Image,
      text:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem"
    },
    {
      id: 6,
      img: RecentBlog6Image,
      text:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem"
    }
  ])

  return (
    <div className='hidden xl:block xl:col-span-1'>
      <div className='card py-4 px-6'>
        <h3 className='text-xl mb-4'>Recent Article</h3>

        {/* Form */}
        <BlogRecentArticleForm />

        {/* Items */}
        {recents.map((recent, index) => (
          <div className='flex flex-row my-6' key={index}>
            {/* Image Here */}
            <img
              src={recent.img}
              alt='RecentBlog1'
              style={styles.recentBlogImg}
            />

            {/* Text Here */}
            <p className='ml-6'>{recent.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  recentBlogImg: {
    width: "94px",
    height: "94px"
  }
}

export default BlogRecentArticle
