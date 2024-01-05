import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactPage from './Pages/ContactPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import MyAccountPage from './Pages/MyAccountPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import ShopPage from './Pages/ShopPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contacts",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/myaccount",
    element: <MyAccountPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)