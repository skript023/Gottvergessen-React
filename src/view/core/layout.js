import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Outlet } from 'react-router-dom'
import Navigation from './navigation'
import Footer from './footer'

function Layout() {
    return (
        <>
        <Navigation />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout;