import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Keys } from "./pages/Keys";
import { Photos } from "./pages/Photos";
import { Contacts } from "./pages/Contacts";
import "./App.css";
import { Header } from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Keys />} />
                    <Route path="/keys" element={<Keys />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<Navigate to="/keys" replace={true} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
