import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Login from './views/login'
import Signup from './views/signup'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Signup} exact path="/signup" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
