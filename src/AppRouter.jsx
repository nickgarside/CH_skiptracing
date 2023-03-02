import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import SkipTracer from './pages/SkipTracer';
import OfferCalc from './pages/OfferCalc';
import Error from './pages/Error';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Launchpad from './pages/Launchpad';
import Marketplace from './pages/Marketplace';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/skip" element={<SkipTracer />} />
                <Route path="/calc" element={<OfferCalc />} />
                <Route path="/error" element={<Error />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dash" element={<Dashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/launch" element={<Launchpad />} />
                <Route path="/market" element={<Marketplace />} />

            </Routes>
        </BrowserRouter>
    )
};
