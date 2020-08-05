import React, { useEffect } from "react"

// Components
import MainLayout from "../../layouts/MainLayout"
import ServiceShowcase from "./ServiceShowcase"
import ServiceFeaturedService from "./ServiceFeaturedService"

const Service = () => {
  useEffect(() => {
    document.title = "BTS.id - Services"
  }, [])

  return (
    <MainLayout>
      <ServiceShowcase />
      <ServiceFeaturedService />
    </MainLayout>
  )
}

export default Service
