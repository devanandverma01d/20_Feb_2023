
//1. import area
// imoprt {} from some library/ some location
// imoprt from some library/ some locationimport React from 'react'
import { Outlet } from 'react-router-dom'
//2. Component definittion arae
export default function Layout() {
    // there are three member of function-
    //1.state/Variable
    //2.Function
    //3.Return stetment
    return (
        <>
            <header><h1>This is Header Sction</h1></header>
            <Outlet />
            <footer><h1>This is Footer Sction</h1></footer>
        </>
    )
}
//3.Export area
//3.1 Default area
//3.2 NAmed Export
