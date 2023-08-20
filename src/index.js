import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Login from './views/login'
import Signup from './views/signup'
import BecomeTeacher from './views/become-teacher'
import StudentDashboard from './views/student-dashboard'
import TeacherDashboard from './views/teacher-dashboard'
import AdminDashboard from './views/admin-dashboard'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Signup} exact path="/signup" />
        <Route component={BecomeTeacher} exact path="/become-teacher" />
        <Route component={StudentDashboard} exact path="/student-dashboard" />
        <Route component={TeacherDashboard} exact path="/teacher-dashboard" />
        <Route component={AdminDashboard} exact path="/admin-dashboard" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
