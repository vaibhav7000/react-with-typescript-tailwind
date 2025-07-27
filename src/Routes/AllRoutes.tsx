import { Routes, Route, Outlet } from "react-router";
import React  from "react";
import Home from "../Pages/Home";
import AddExpense from "../Pages/AddExpese";

export default function AllRoutes(): React.JSX.Element {
    return (
        <Routes>
            <Route path="" element={<Wrapper/>}>
                <Route index element={<Home/>} />
                <Route path="addExpense" element={<AddExpense/>} />
            </Route>
        </Routes>
    )
}


function Wrapper(): React.JSX.Element {

    return (
        <div className="h-screen w-screen bg-linear-to-br from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-100%">
            <Outlet/>
        </div>
    )

}