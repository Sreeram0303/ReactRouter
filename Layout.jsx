import React from 'react'
// Rather than calling the Header and Footer for every page we use outlet to render the content of the page
import { Outlet } from 'react-router-dom'
import Footer from "./src/Components/Footer/Footer.jsx"
import Header from './src/Components/Header/Header.jsx'
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout