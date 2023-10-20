import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
         <Auth0Provider
            domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
         >
            <App />
         </Auth0Provider>
     </Provider>
  </React.StrictMode>,
)
