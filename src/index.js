import React from 'react'
import ReactDOM from 'react-dom'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import App from './containers/App/App'
import Choices from './containers/Choices/Choices'
import Navigation from './components/Navigation/Navigation'

ReactDOM.render((
  <Router>
    <div>
      <Navigation exact path="/" component={App} />
      <Navigation path="/story" component={Choices} />
      <Route exact path="/" component={App} />
      <Route path="/story" component={Choices} />
    </div>
  </Router>
), document.getElementById('root'))
