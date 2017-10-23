import React from 'react'
import {Router,Route,Link,browserHistory  ,IndexRoute} from 'react-router'

import Home from '../components/Home'
import About from '../components/About'

const Roots = React.createClass({
    render() {
      return (
        <div>
          <h1>Roots</h1>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Inbox</Link></li>
          </ul>
          {this.props.children}
        </div>
      )
    }
  })

const MyRouter = (
    <Router history={browserHistory}>
        <Route path = "/" component = {Roots}>
            <IndexRoute component = {Home} />
            <Route path="about" component ={About} />
        </Route>
  </Router>)
export default MyRouter;