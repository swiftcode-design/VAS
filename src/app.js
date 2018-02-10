import React, { Component} from 'react'
import ReactDom from 'react-dom'
import AutoApp from './components/AutoApp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import "react-image-gallery/styles/css/image-gallery.css"; 

ReactDom.render(
  <MuiThemeProvider><AutoApp/></MuiThemeProvider>, document.getElementById('app')
)
