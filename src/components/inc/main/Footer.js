import React from "react"
import { Link } from "react-router-dom"

import FacebookIcon from "../../../assets/img/Footer/Facebook.png"
import LinkedInIcon from "../../../assets/img/Footer/LinkedIn.png"

const Footer = () => {
  return (
    <footer className='wrapper bg-secondary font-primary'>
      <div className='flex justify-start mb-6'>
        <img
          src={require("../../../assets/img/Footer/BTSWhite.png")}
          alt='BTSWhite'
          style={styles.footerLogo}
        />
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-10'>
        {/* Reach US & Contact US */}
        <div className='leading-9'>
          <div className='mb-2'>
            <h3 className='text-xl mb-1 font-bold'>Reach Us</h3>
            <p style={{ fontSize: "18px" }} className='font-default'>
              PT. INTERSOLUSI TEKNOLOGI ASIA
            </p>
            <p>Jl. Dangdeur Indah III No.5 - 40163 Bandung, Indonesia</p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-1'>Contact Us</h3>
            <p>(+62 22) 6614726</p>
            <p>info@bts.id</p>
          </div>
        </div>

        {/* Blog Post */}
        <div className='footer-blog xl:col-span-1 md:col-span-2'>
          <h3 className='text-xl mb-4 font-bold'>Blog Post</h3>
          <div className='flex mb-4'>
            <img
              src={require("../../../assets/img/Home/Blog/Blog1.png")}
              alt='Footer1'
              style={styles.footerBlogImg}
              className='rounded'
            />
            <div className='flex flex-col justify-between ml-4'>
              <Link to='#!' className='font-bold'>
                Aplikasi ERP Pada Rumah Sakit
              </Link>
              <p className='lead'>20 March 2020</p>
            </div>
          </div>

          <div className='flex mb-4'>
            <img
              src={require("../../../assets/img/Home/Blog/Blog2.png")}
              alt='Footer2'
              style={styles.footerBlogImg}
              className='rounded'
            />
            <div className='flex flex-col justify-between ml-4'>
              <Link to='#!' className='font-bold'>
                Aplikasi ERP Pada Rumah Sakit
              </Link>
              <p className='lead'>20 March 2020</p>
            </div>
          </div>

          <div className='flex mb-4'>
            <img
              src={require("../../../assets/img/Home/Blog/Blog3.png")}
              alt='Footer3'
              style={styles.footerBlogImg}
              className='rounded'
            />
            <div className='flex flex-col justify-between ml-4'>
              <Link to='#!' className='font-bold'>
                Aplikasi ERP Pada Rumah Sakit
              </Link>
              <p className='lead'>20 March 2020</p>
            </div>
          </div>
        </div>

        {/* News Letter Form */}
        <div className='md:col-span-3 xl:col-span-1'>
          <h3 className='text-xl mb-4 font-bold'>News Letter</h3>
          <form className='w-full'>
            <div className='flex items-center pb-2'>
              <input
                className='w-full text-gray-700 py-3 px-2 rounded-none focus:outline-none'
                type='text'
                placeholder='Your Email Address'
                style={{
                  borderTopLeftRadius: "3px",
                  borderBottomLeftRadius: "3px"
                }}
              />
              <div
                style={{
                  backgroundColor: "#fff",
                  height: "48px",
                  borderTopRightRadius: "3px",
                  borderBottomRightRadius: "3px"
                }}
              >
                <button
                  style={{
                    backgroundColor: "#b22026",
                    marginTop: "5px",
                    marginRight: "5px",
                    padding: "7px",
                    borderRadius: "3px"
                  }}
                  type='button'
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* EndGrid */}

      {/* Footer Info */}
      <div className='w-full'>
        {/* Line */}
        <hr className='mb-6' />
        <div className='flex w-full justify-between items-center'>
          <h5>&copy; PT INTERSOLUSI TEKNOLOGI ASIA 2020</h5>
          {/* Socials Media */}
          <div className='flex'>
            <a href='#!'>
              <img
                src={FacebookIcon}
                alt='facebook'
                className='mr-4'
                style={styles.footerIcon}
              />
            </a>
            <a href='#!'>
              <img
                src={LinkedInIcon}
                alt='linkedin'
                style={styles.footerIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footerLogo: {
    width: "120px",
    height: "40px"
  },
  footerBlogImg: {
    width: "80px",
    height: "72px"
  },
  footerIcon: {
    width: "28px",
    height: "28px"
  }
}

export default Footer
