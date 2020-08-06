// Main React
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Tailwind CSS
import "./assets/styles/tailwind/style.css"

// Components
import Home from "./components/main/home/Home"
import Service from "./components/main/service/Service"
import Industry from "./components/main/industry/Industry";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Service} />
        <Route exact path='/industries' component={Industry} />
      </Switch>
    </Router>
  )
}

export default App
