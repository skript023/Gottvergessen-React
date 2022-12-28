import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UnauthorizedOnly from './unauthorize_only'
import Layout from './core/layout'
import Home from './home'
import About from './about'
import Contact from './contact'
import Post from './post'
import Register from './register'
import Login from './login'

const Frontend = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={< Home title="Home" />}/>
                <Route path='about' element={< About title="About" />}/>
                <Route path='contact' element={< Contact title="Contact" />}/>
                <Route path='post' element={< Post title="Post" />}/>
                <Route path='register' element={<Register title="Register"/> } />
                <Route element={<UnauthorizedOnly/>}>
                    <Route path='login' element={<Login title="Login"/> } />
                </Route>
            </Route>
        </Routes>
    )
}

export default Frontend