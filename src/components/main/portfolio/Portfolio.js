import React, { useEffect } from 'react'

// Components
import MainLayout from '../../layouts/MainLayout'
import PortfolioShowcase from './PortfoloioShowcase'
import PortfolioList from './PortfolioList'
import PortfolioForm from './PortfolioForm'

const Portfolio = () => {
  useEffect(() => {
    document.title = 'BTS.id - Portfolios'
    window.scrollTo(0, 0)
  }, [])

  return (
    <MainLayout>
      <PortfolioShowcase />
      <PortfolioList />
      <PortfolioForm />
    </MainLayout>
  )
}

export default Portfolio
