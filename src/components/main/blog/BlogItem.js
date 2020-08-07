import React from "react"

import Blog1Image from "../../../assets/img/Blog/Blog1.png"
import Blog2Image from "../../../assets/img/Blog/Blog2.png"
import Blog3Image from "../../../assets/img/Blog/Blog3.png"
import Blog4Image from "../../../assets/img/Blog/Blog4.png"
import Blog5Image from "../../../assets/img/Blog/Blog5.png"
import CalendarIcon from "../../../assets/img/Blog/CalendarIcon.svg"
import UserIcon from "../../../assets/img/Blog/UserIcon.svg"
import CategoryIcon from "../../../assets/img/Blog/CategoryIcon.svg"

import RecentBlog1Image from "../../../assets/img/Blog/RecentBlog1.png"
import RecentBlog2Image from "../../../assets/img/Blog/RecentBlog2.png"
import RecentBlog3Image from "../../../assets/img/Blog/RecentBlog3.png"
import RecentBlog4Image from "../../../assets/img/Blog/RecentBlog4.png"
import RecentBlog5Image from "../../../assets/img/Blog/RecentBlog5.png"
import RecentBlog6Image from "../../../assets/img/Blog/RecentBlog6.png"

const BlogItem = () => {
  return (
    <div className='px-6 md:px-24 py-10 font-primary'>
      <h3 className='text-center md:text-left text-4xl md:text-5xl mb-6'>
        Our <strong>Article</strong>
      </h3>
      {/* Grid Col 3 */}
      <div className='grid grid-cols-3'>
        {/* Blog Item */}
        <div className='col-span-3 items-center justify-center md:col-span-2'>
          <div className='blog-item mb-16'>
            <img
              src={Blog5Image}
              alt='Blog1'
              className='rounded'
              style={styles.blogImg}
            />
            <h3 className='text-xl md:text-2xl font-default mt-4 w-11/12'>
              Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
              Integrasi Sistem
            </h3>
            <div className='flex flex-col md:flex-row text-sm mt-2'>
              <div className='my-2 md:mr-6 flex items-center'>
                <img
                  src={CalendarIcon}
                  style={styles.blogIcon}
                  alt='Calendar'
                />
                <span className='ml-2'>June 30, 2020</span>
              </div>

              <div className='my-2 md:mr-6 flex items-center'>
                <img src={UserIcon} style={styles.blogIcon} alt='User' />
                <span className='ml-2'>Reni Hanipah</span>
              </div>

              <div className='my-2 md:mr-6 flex items-center'>
                <img
                  src={CategoryIcon}
                  style={styles.blogIcon}
                  alt='Category'
                />
                <span className='ml-2'>System Integration</span>
              </div>
            </div>
            <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8 w-11/12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <a
              href='#!'
              className='btn-primary uppercase hover:bg-white hover:text-primary mt-4'
            >
              Read More
            </a>
          </div>

          <div className='blog-item mb-16'>
            <img
              src={Blog1Image}
              alt='Blog1'
              className='rounded'
              style={styles.blogImg}
            />
            <h3 className='text-xl md:text-2xl font-default mt-4 w-11/12'>
              Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
              Integrasi Sistem
            </h3>
            <div className='flex flex-col md:flex-row text-sm mt-2'>
              <div className='my-2 md:mr-6 flex items-center'>
                <img
                  src={CalendarIcon}
                  style={styles.blogIcon}
                  alt='Calendar'
                />
                <span className='ml-2'>June 30, 2020</span>
              </div>

              <div className='my-2 md:mr-6 flex items-center'>
                <img src={UserIcon} style={styles.blogIcon} alt='User' />
                <span className='ml-2'>Reni Hanipah</span>
              </div>

              <div className='my-2 md:mr-6 flex items-center'>
                <img
                  src={CategoryIcon}
                  style={styles.blogIcon}
                  alt='Category'
                />
                <span className='ml-2'>System Integration</span>
              </div>
            </div>
            <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8 w-11/12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <a
              href='#!'
              className='btn-primary uppercase hover:bg-white hover:text-primary mt-4'
            >
              Read More
            </a>
          </div>

          <div className='blog-item mb-16'>
            <img
              src={Blog2Image}
              alt='Blog3'
              className='rounded'
              style={styles.blogImg}
            />
            <h3 className='text-xl md:text-2xl font-default mt-4 w-11/12'>
              Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
              Integrasi Sistem
            </h3>
            <div className='flex flex-col md:flex-row text-sm mt-2'>
              <div className='my-2 md:mr-6 flex items-center'>
                <img
                  src={CalendarIcon}
                  style={styles.blogIcon}
                  alt='Calendar'
                />
                <span className='ml-2'>June 30, 2020</span>
              </div>

              <div className='my-2 md:mr-6 flex items-center'>
                <img src={UserIcon} style={styles.blogIcon} alt='User' />
                <span className='ml-2'>Reni Hanipah</span>
              </div>

              <div className='my-2 md:mr-6 flex items-center'>
                <img
                  src={CategoryIcon}
                  style={styles.blogIcon}
                  alt='Category'
                />
                <span className='ml-2'>System Integration</span>
              </div>
            </div>
            <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8 w-11/12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <a
              href='#!'
              className='btn-primary uppercase hover:bg-white hover:text-primary mt-4'
            >
              Read More
            </a>
          </div>

          <div className='blog-item mb-16'>
            <img
              src={Blog3Image}
              alt='Blog4'
              className='rounded'
              style={styles.blogImg}
            />
            <h3 className='text-xl md:text-2xl font-default mt-4 w-11/12'>
              Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
              Integrasi Sistem
            </h3>
            <div className='flex flex-col md:flex-row text-sm mt-2'>
              <div className='my-2 md:mr-6 flex items-center'>
                <img
                  src={CalendarIcon}
                  style={styles.blogIcon}
                  alt='Calendar'
                />
                <span className='ml-2'>June 30, 2020</span>
              </div>

              <div className='my-2 md:mr-6 flex items-center'>
                <img src={UserIcon} style={styles.blogIcon} alt='User' />
                <span className='ml-2'>Reni Hanipah</span>
              </div>

              <div className='my-2 md:mr-6 flex items-center'>
                <img
                  src={CategoryIcon}
                  style={styles.blogIcon}
                  alt='Category'
                />
                <span className='ml-2'>System Integration</span>
              </div>
            </div>
            <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8 w-11/12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <a
              href='#!'
              className='btn-primary uppercase hover:bg-white hover:text-primary mt-4'
            >
              Read More
            </a>
          </div>

          <div className='blog-item mb-16'>
            <img
              src={Blog4Image}
              alt='Blog5'
              className='rounded'
              style={styles.blogImg}
            />
            <h3 className='text-xl md:text-2xl font-default mt-4 w-11/12'>
              Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
              Integrasi Sistem
            </h3>
            <div className='flex flex-col md:flex-row text-sm mt-2'>
              <div className='my-2 md:mr-6 flex items-center'>
                <img
                  src={CalendarIcon}
                  style={styles.blogIcon}
                  alt='Calendar'
                />
                <span className='ml-2'>June 30, 2020</span>
              </div>

              <div className='my-2 md:mr-6 flex items-center'>
                <img src={UserIcon} style={styles.blogIcon} alt='User' />
                <span className='ml-2'>Reni Hanipah</span>
              </div>

              <div className='my-2 md:mr-6 flex items-center'>
                <img
                  src={CategoryIcon}
                  style={styles.blogIcon}
                  alt='Category'
                />
                <span className='ml-2'>System Integration</span>
              </div>
            </div>
            <p className='text-justify text-sm md:text-base leading-loose mt-4 mb-8 w-11/12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <a
              href='#!'
              className='btn-primary uppercase hover:bg-white hover:text-primary mt-4'
            >
              Read More
            </a>
          </div>
        </div>
        {/* End Blog Item */}

        <div className='hidden md:block col-span-1'>
          <div className='card py-4 px-6'>
            {/* Select Option */}
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
            {/* End Select Option */}

            <h3 className='text-xl mt-4'>Recent Article</h3>

            {/* Recent Article List */}
            <div className='flex flex-col mt-6'>
              <div className='flex flex-row mb-6'>
                {/* Image Here */}
                <img
                  src={RecentBlog1Image}
                  alt='RecentBlog1'
                  style={styles.recentBlogImg}
                />

                {/* Text Here */}
                <p className='ml-6'>
                  Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
                  Integrasi Sistem
                </p>
              </div>

              <div className='flex flex-row mb-6'>
                {/* Image Here */}
                <img
                  src={RecentBlog2Image}
                  alt='RecentBlog2'
                  style={styles.recentBlogImg}
                />

                {/* Text Here */}
                <p className='ml-6'>
                  Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
                  Integrasi Sistem
                </p>
              </div>

              <div className='flex flex-row mb-6'>
                {/* Image Here */}
                <img
                  src={RecentBlog3Image}
                  alt='RecentBlog3'
                  style={styles.recentBlogImg}
                />

                {/* Text Here */}
                <p className='ml-6'>
                  Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
                  Integrasi Sistem
                </p>
              </div>

              <div className='flex flex-row mb-6'>
                {/* Image Here */}
                <img
                  src={RecentBlog4Image}
                  alt='RecentBlog4'
                  style={styles.recentBlogImg}
                />

                {/* Text Here */}
                <p className='ml-6'>
                  Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
                  Integrasi Sistem
                </p>
              </div>

              <div className='flex flex-row mb-6'>
                {/* Image Here */}
                <img
                  src={RecentBlog5Image}
                  alt='RecentBlog5'
                  style={styles.recentBlogImg}
                />

                {/* Text Here */}
                <p className='ml-6'>
                  Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
                  Integrasi Sistem
                </p>
              </div>

              <div className='flex flex-row'>
                {/* Image Here */}
                <img
                  src={RecentBlog6Image}
                  alt='RecentBlog6'
                  style={styles.recentBlogImg}
                />

                {/* Text Here */}
                <p className='ml-6'>
                  Sebelum melakukan Integrasi Sistem Part. 3: Tahapan Proses
                  Integrasi Sistem
                </p>
              </div>
            </div>
            {/* End Recent Article List */}
          </div>
        </div>
      </div>
      {/* End Grid Col 3 */}
    </div>
  )
}

const styles = {
  blogImg: {
    width: "683px",
    height: "348px"
  },
  recentBlogImg: {
    width: "94px",
    height: "94px"
  },
  blogIcon: {
    width: "24px",
    heigth: "24px"
  }
}

export default BlogItem
