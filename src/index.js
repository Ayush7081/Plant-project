
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom";

import About from './pages/about';
import Blog from './pages/blog';
import Offerings  from './pages/offerings';
import Contact from './pages/contact';
import Formpage from './Components/Formpage'
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
 {
    path: "/Blog",
    element: <Blog />,
  }, 
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Offerings",
    element: <Offerings />,
  }, 
  {
    path: "/Contact",
    element: <Contact/>,
  }, 
  {
    path: "/Formpage",
    element: <Formpage/>,
  }, 
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




