import React, { Component} from 'react'
import ReactDom from 'react-dom'
import AutoApp from './components/AutoApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDom.render(<AutoApp/>, document.getElementById('app'))
