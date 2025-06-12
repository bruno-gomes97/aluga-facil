import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'
import './i18nify.js'
import './index.css'
import CreateAccount from './page/createAccount/CreateAccount.jsx'
import Dashboard from './page/dashboard/Dashboard.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "register",
    element: <CreateAccount />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>,
)
