import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from "../Layout.jsx"
import Home from '../src/Components/Home/Home.jsx'
import About from '../src/Components/About/About.jsx'
import Contact from '../src/Components/Contact/Contact.jsx'
import User from '../src/Components/User/User.jsx'
import Github,{githubLoader} from './Components/Github/Github.jsx'
import { Routes } from 'react-router-dom'
// The RouterProvider component is used to wrap the entire application , it provides the routing functionality to the application
// It only workd when a prop is passed to it, which is router

// 1st method to create the router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element:< About/>  
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]

//   }

// ])




// The  create BrowserRouter function is used to c  reate a router object that is passed to the RouterProvider component

// 2nd method to create the router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />} >
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='user/:userid' element={<User/>} />
        <Route
        loader={githubLoader} 
        path='github' 
        element={<Github/>} />
    </Route>
    // The loader prop is used to load the component lazily when the route is visited by the user 
    // wiith the help of the loader prop we can load the component lazily and improve the performance of the application , in other 
    // words we can say that the component is loaded only when the user visits the route like in the case of the github component when
    // the user hover over the github link the component is loaded and the data is fetched from the api
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* Now we need to create the router */}
  </React.StrictMode>,
)
