import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root.jsx'
import store from './store/index.js';
import Favicon from 'react-favicon';

render (
  <div>
    <Favicon url='./assets/images/favicon.ico'/>
    <Root store={store} />
  </div>,
  document.getElementById('mount')
)
