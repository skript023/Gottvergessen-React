import { Outlet } from 'react-router-dom'
import { ColorModeContext, useMode } from '../theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import Sidebar from './sidebar'
import TopbarHeader from './topbar_header'

const DashboardLayout = () =>
{
    const [theme, color_mode] = useMode();

    return (
        <ColorModeContext.Provider value={color_mode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                <Sidebar/>
                    <main className="content">
                    <TopbarHeader/>
                    <Outlet/>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default DashboardLayout;