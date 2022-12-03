import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './core/layout'
import Home from './home'
import About from './about'
import Contact from './contact'

const Frontend = () => 
{
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={< Home title="Home" />}/>
                <Route path='about' element={< About title="About" />}/>
                <Route path='contact' element={< Contact title="Contact" />}/>
            </Route>
        </Routes>
    )
}

export default Frontend