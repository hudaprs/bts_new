import React from "react"

// Components
import MainLayout from "../../layouts/MainLayout"
import HomeShowcase from "./HomeShowcase"
import HomeServices from "./HomeServices"

const Home = () => {
  return (
    <MainLayout>
      <HomeShowcase />
      <HomeServices />
    </MainLayout>
  )
}

export default Home
