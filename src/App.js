import { BrowserRouter as Router } from 'react-router-dom'

import Frontend from './view/render'
import Backend from './view/dashboard/render'

function App() {
    return (
        <Router>
            <Frontend/>
            <Backend/>
        </Router>
    );
}

export default App;
