import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './core/layout'
import Dashboard from './dashboard'
import Team from "./team/team";
import Contacts from "./contacts/contacts";
import Invoices from "./invoice/invoices";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";

const Backend = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardLayout/>}>
                <Route index element={< Dashboard title="Dashboard" />}/>
                <Route path='team' element={< Team title="Team" />}/>
                <Route path='contacts' element={< Contacts title="Contacts" />}/>
                <Route path='invoices' element={< Invoices title="Invoices" />}/>
                {/* <Route path='bar' element={< Bar title="Bar" />}/>
                <Route path='form' element={< Form title="Form" />}/>
                <Route path='line' element={< Line title="Line" />}/>
                <Route path='pie' element={< Pie title="Pie" />}/>
                <Route path='faq' element={< FAQ title="FAQ" />}/>
                <Route path='geo' element={< Geography title="Geography" />}/> */}
            </Route>
        </Routes>
    )
}

export default Backend