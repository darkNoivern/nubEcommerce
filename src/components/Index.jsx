import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Similar from './Similar'
import Home from './Home'
import Lonely from "./Lonely"
import Cart from './Cart'
import Error from './Error'
import { ToastContainer } from 'react-toastify'
import './style.css'

const Index = () => {
    return (
        <>
        <Router>
        <ToastContainer />
            <Navbar />   
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route exact path="/cart" element={<Cart />} /> 
                <Route exact path="/product/:id" element={<Lonely />} />
                <Route exact path="/similar/:category" element={<Similar />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
        </>
    )
}

export default Index
