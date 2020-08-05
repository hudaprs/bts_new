// Main React
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Tailwind CSS
import "./assets/styles/tailwind/style.css"

// Components
import Home from "./components/main/home/Home"
import Service from "./components/main/service/Service"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Service} />
      </Switch>
    </Router>
  )
}

export default App
