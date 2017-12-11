import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Principal from './principal/Principal'
import Curriculum from './curriculumvitae/Curriculum'
import Portfolio from './portfolio/Portfolio'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/curriculum" component={Curriculum} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    )
  }
}

export default App
