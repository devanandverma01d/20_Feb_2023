//1. import area
// imoprt {} from some library/ some location
// imoprt from some library/ some location
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import "./Style.css";
//2. Component definition area
let App = () => {
    // there are three member of function-
    //1.state/Variable
    //2.Function
    //3.Return stetment
    return (
        //every function return something
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
//3.Export area
//3.1 Default area
//3.2 NAmed Export