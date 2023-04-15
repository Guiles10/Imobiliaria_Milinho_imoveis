import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StyledGlobal } from './globalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledGlobal />
    <App />
  </React.StrictMode>,
)
