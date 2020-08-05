import React from "react"

// Components
import MainLayout from "../../layouts/MainLayout"
import HomeShowcase from "./HomeShowcase"
import HomeServices from "./HomeServices"
import HomeTechExpertise from "./HomeTechExpertise"

const Home = () => {
  return (
    <MainLayout>
      <HomeShowcase />
      <HomeServices />
      <HomeTechExpertise />
    </MainLayout>
  )
}

export default Home
