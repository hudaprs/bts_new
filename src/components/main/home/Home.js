import React from "react"

// Components
import MainLayout from "../../layouts/MainLayout"
import HomeShowcase from "./HomeShowcase"
import HomeServices from "./HomeServices"
import HomeTechExpertise from "./HomeTechExpertise"
import HomeCompanies from "./HomeCompanies"

const Home = () => {
  return (
    <MainLayout>
      <HomeShowcase />
      <HomeServices />
      <HomeTechExpertise />
      <HomeCompanies />
    </MainLayout>
  )
}

export default Home
