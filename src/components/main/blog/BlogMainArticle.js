import React, { useState } from "react"

// Images & Icons
import Blog1Image from "../../../assets/img/Blog/Blog1.png"
import Blog2Image from "../../../assets/img/Blog/Blog2.png"
import Blog3Image from "../../../assets/img/Blog/Blog3.png"
import Blog4Image from "../../../assets/img/Blog/Blog4.png"
import Blog5Image from "../../../assets/img/Blog/Blog5.png"
import CalendarIcon from "../../../assets/img/Blog/CalendarIcon.svg"
import UserIcon from "../../../assets/img/Blog/UserIcon.svg"
import CategoryIcon from "../../../assets/img/Blog/CategoryIcon.svg"

const BlogMainArticle = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      img: Blog1Image,
      title:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem",
      date: "June 30, 2020",
      author: "Reni Hanipah",
      category: "System Integrator",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore.`
    },
    {
      id: 2,
      img: Blog2Image,
      title:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem",
      date: "June 30, 2020",
      author: "Reni Hanipah",
      category: "System Integrator",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore.`
    },
    {
      id: 3,
      img: Blog3Image,
      title:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem",
      date: "June 30, 2020",
      author: "Reni Hanipah",
      category: "System Integrator",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore.`
    },
    {
      id: 4,
      img: Blog4Image,
      title:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem",
      date: "June 30, 2020",
      author: "Reni Hanipah",
      category: "System Integrator",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore.`
    },
    {
      id: 5,
      img: Blog5Image,
      title:
        "Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses Integrasi Sistem",
      date: "June 30, 2020",
      author: "Reni Hanipah",
      category: "System Integrator",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore.`
    }
  ])

  return (
    <div className='col-span-3 xl:col-span-2 items-center justify-center'>
      {articles.map((article, index) => (
        <div className='mb-16' key={index}>
          <img
            src={article.img}
            alt='Blog1'
            className='rounded md:text-center md:m-auto w-full'
          />
          <h3 className='text-xl md:text-2xl font-default mt-4 w-11/12'>
            {article.title}
          </h3>
          <div className='flex flex-col md:flex-row text-sm mt-2'>
            <div className='my-2 md:mr-6 flex items-center'>
              <img src={CalendarIcon} style={styles.blogIcon} alt='Calendar' />
              <span className='ml-2'>{article.date}</span>
            </div>

            <div className='my-2 md:mr-6 flex items-center'>
              <img src={UserIcon} style={styles.blogIcon} alt='User' />
              <span className='ml-2'>{article.author}</span>
            </div>

            <div className='my-2 md:mr-6 flex items-center'>
              <img src={CategoryIcon} style={styles.blogIcon} alt='Category' />
              <span className='ml-2'>{article.category}</span>
            </div>
          </div>
          <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8 w-11/12'>
            {article.body}
          </p>
          <a
            href='#!'
            className='btn-primary uppercase hover:bg-white hover:text-primary mt-4'
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  )
}

const styles = {
  blogIcon: {
    width: "24px",
    heigth: "24px"
  }
}

export default BlogMainArticle
