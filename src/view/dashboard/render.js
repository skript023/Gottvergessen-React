import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RequireAuth from '../require_authentication'
import DashboardLayout from './core/layout'
import Dashboard from './dashboard'
import Team from "./team/team";
import Contacts from "./contacts/contacts";
import Invoices from "./invoice/invoices";
import Calendar from "./calendar/calendar"
import Bar from "./bar/bar";
import Form from "./form/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
import FAQ from "./faq/faq";
// import Geography from "./scenes/geography";

const Backend = () => {
    return (
        <Routes>
            <Route element={<RequireAuth/>}>
                <Route path="/dashboard" element={<DashboardLayout/>}>
                    <Route index element={< Dashboard title="Dashboard" />}/>
                    <Route path='team' element={< Team title="Team" />}/>
                    <Route path='contacts' element={< Contacts title="Contacts" />}/>
                    <Route path='invoices' element={< Invoices title="Invoices" />}/>
                    <Route path='calendar' element={< Calendar title="Calendar" />}/>
                    <Route path='faq' element={< FAQ title="FAQ" />}/>
                    <Route path='form' element={< Form title="Form" />}/>
                    <Route path='bar' element={< Bar title="Bar" />}/>
                    {/* 
                    
                    <Route path='line' element={< Line title="Line" />}/>
                    <Route path='pie' element={< Pie title="Pie" />}/>
                    
                    <Route path='geo' element={< Geography title="Geography" />}/> */}
                </Route>
            </Route>
        </Routes>
    )
}

export default Backend