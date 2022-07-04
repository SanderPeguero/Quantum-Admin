import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MaterialUIControllerProvider } from "./Component/Dashboard/context";


ReactDOM.createRoot(document.getElementById('root')).render(
  <MaterialUIControllerProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MaterialUIControllerProvider>
)
