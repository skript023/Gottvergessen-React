import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DashboardLayout from './view/dashboard/core/layout'
import Dashboard from './view/dashboard/dashboard'
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";

import Layout from './view/core/layout'
import Home from './view/home'
import About from './view/about'
import Contact from './view/contact'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={< Home title="Home" />}/>
                    <Route path='about' element={< About title="About" />}/>
                    <Route path='contact' element={< Contact title="Contact" />}/>
                </Route>
                <Route path="/dashboard" element={<DashboardLayout/>}>
                    <Route index element={< Dashboard title="Home" />}/>
                    {/* <Route path='team' element={< Team title="Team" />}/>
                    <Route path='invoices' element={< Invoices title="Invoices" />}/>
                    <Route path='contacts' element={< Contacts title="Contacts" />}/>
                    <Route path='bar' element={< Bar title="Bar" />}/>
                    <Route path='form' element={< Form title="Form" />}/>
                    <Route path='line' element={< Line title="Line" />}/>
                    <Route path='pie' element={< Pie title="Pie" />}/>
                    <Route path='faq' element={< FAQ title="FAQ" />}/>
                    <Route path='geo' element={< Geography title="Geography" />}/> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
