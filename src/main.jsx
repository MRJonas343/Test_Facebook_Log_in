import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Facebook from 'react-facebook'

const appId = '7568321253207635'; // Replace with your actual app ID

Facebook.init({
  appId, // Your Facebook app ID
  xfbml: true,
  version: 'v15.0', // Specify the Facebook SDK version
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <FacebookProvider appId={appId} version="v15.0">
      <App />
    </FacebookProvider>
  </React.StrictMode>,
)
