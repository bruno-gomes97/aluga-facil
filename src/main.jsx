import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './i18nify.js'
import './index.css'
import CreateAccount from './page/createAccount/CreateAccount.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "register",
    element: <CreateAccount />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
