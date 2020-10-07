import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home, Sukses, Data } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
              <Route  path="/home" component={Home} exact/>
              <Route  path="/sukses" component={Sukses} exact/>
              <Route  path="/pembukuan" component={Data} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}
