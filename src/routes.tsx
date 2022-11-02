import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import { Listing, Detail } from './pages'

export default () => {
    return (
        <Router>
            <Routes>
                <Route element={<Listing/>} path="/" />

                <Route element={<Detail/>} path="/detail" />
            </Routes>
        </Router>
    )
}