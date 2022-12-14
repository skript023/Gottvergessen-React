import { ColorModeContext, useMode } from '../dashboard/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navigation from './navigation'
import Footer from './footer'

function Layout() {

    const [theme, color_mode] = useMode();
    
    return (
        <ColorModeContext.Provider value={color_mode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Navigation />
                <Outlet />
                <Footer />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default Layout;