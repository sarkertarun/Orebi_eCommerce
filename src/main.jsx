import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RouteLayouts from './Components/RouteLayouts.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ContactPage from './Pages/ContactPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import MyAccountPage from './Pages/MyAccountPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import ShopPage from './Pages/ShopPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

const router = createBrowserRouter(
  
  createRoutesFromElements(
  <Route>
    <Route path='/' element={<RouteLayouts />}>
    <Route path='/' element={<App/>} />
    <Route path='contacts' element={<ContactPage/>} />
    <Route path='about' element={<AboutPage/>} />
    <Route path='myaccount' element={<MyAccountPage/>} />
    <Route path='signup' element={<SignUpPage/>} />
    <Route path='shop' element={<ShopPage/>} />
    <Route path='login' element={<LoginPage/>} />
    <Route path='/:id' element={<ErrorPage/>}/>
    </Route>
   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)