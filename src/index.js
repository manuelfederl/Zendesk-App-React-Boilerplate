/**
  * Node Module Imports
**/
import React from 'react'
import ReactDOM from 'react-dom'
import 'promise-polyfill/src/polyfill'
import '@zendeskgarden/css-bedrock'
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'

/**
  * Component Imports
**/
import App from './components/App'

/**
  * The render function to render the App component to the browsers DOM.
  *
  * @component      HTML      HTML elements
  * 
  * @return         {obj}     HTML components to be rendered to the DOM
**/
ReactDOM.render(
  <ThemeProvider theme={DEFAULT_THEME}>
    <App />
  </ThemeProvider>, document.getElementById('root'))
