import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './view/core/navigation'
import Footer from './view/core/footer'
import Home from './view/home'
import About from './view/about'
import Contact from './view/contact'

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                    <Routes>
                        <Route exact path='/' element={< Home />}></Route>
                        <Route exact path='/about' element={< About />}></Route>
                        <Route exact path='/contact' element={< Contact />}></Route>
                    </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
