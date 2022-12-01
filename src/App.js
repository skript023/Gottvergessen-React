import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Navigation from './view/core/navigation'
import Footer from './view/core/footer'
import Home from './view/home'

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
