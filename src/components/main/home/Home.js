import React, { useEffect } from 'react'

// Components
import MainLayout from '../../layouts/MainLayout'
import HomeShowcase from './HomeShowcase'
import HomeServices from './HomeServices'
import HomeTechExpertise from './HomeTechExpertise'
import HomeCompanies from './HomeCompanies'
import HomeBlog from './HomeBlog'

const Home = () => {
  useEffect(() => {
    document.title = 'BTS.id - Home'
    window.scrollTo(0, 0)
  }, [])

  return (
    <MainLayout>
      <HomeShowcase />
      <HomeServices />
      <HomeTechExpertise />
      <HomeCompanies />
      <HomeBlog />
    </MainLayout>
  )
}

export default Home
