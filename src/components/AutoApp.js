import React, { Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Home from './Home'
import Admin from './Admin'
import AppBar from 'material-ui/AppBar'

class AutoApp extends Component {
  render() {
    console.log('this.state:', this.state)

    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Vigilant Auto Sales"  />
          <BrowserRouter>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route path="/" component={Admin} />
            </Switch>
          </BrowserRouter>
      </div>
    )
  }
}

export default AutoApp
