import React, { Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './HomePage'
import Admin from './Admin'
import AppBar from 'material-ui/AppBar'

class AutoApp extends Component {
  render() {
    console.log('this.state:', this.state)

    return (
      <div >
        <AppBar
          showMenuIconButton={false}
          style={{position: "fixed"}}
          title="Vigilant Auto Sales"  />
          <div style={{paddingTop: "65px"}}>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/admin" component={Admin} />
              </Switch>
            </BrowserRouter>
          </div>
      </div>
    )
  }
}

export default AutoApp
