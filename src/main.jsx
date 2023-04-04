import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage'
import About from './components/About/About'
import Countries from './components/Countries/Countries'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import SeeDetails from './components/SeeDetails/SeeDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'countries',
        element: <Countries />,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'detail',
        element: <SeeDetails />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
