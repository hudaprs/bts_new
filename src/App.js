// Main React
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Tailwind CSS
import "./assets/styles/tailwind/style.css"

// Components
import Home from "./components/main/home/Home"
import Service from "./components/main/service/Service"
import Industry from "./components/main/industry/Industry"
import Portfolio from "./components/main/portfolio/Portfolio"
import Blog from "./components/main/blog/Blog"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Service} />
        <Route exact path='/industries' component={Industry} />
        <Route exact path='/portfolios' component={Portfolio} />
        <Route exact path='/blog' component={Blog} />
      </Switch>
    </Router>
  )
}

export default App
