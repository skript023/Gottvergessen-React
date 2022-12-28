import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './view/authentication_provider';

import Frontend from './view/render'
import Backend from './view/dashboard/render'

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Frontend/>
                <Backend/>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
