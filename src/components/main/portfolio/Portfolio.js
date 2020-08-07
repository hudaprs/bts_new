import React, { useEffect } from "react"

// Components
import MainLayout from "../../layouts/MainLayout"
import PortfolioShowcase from "./PortfoloioShowcase"
import PortfolioList from "./PortfolioList"

const Portfolio = () => {
  useEffect(() => {
    document.title = "BTS.id - Portfolios"
  }, [])

  return (
    <MainLayout>
      <PortfolioShowcase />
      <PortfolioList />
    </MainLayout>
  )
}

export default Portfolio
