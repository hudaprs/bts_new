// Main React
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Tailwind CSS
import "./assets/styles/tailwind/style.css"

// Components
import Home from "./components/main/home/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
