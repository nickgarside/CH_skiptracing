import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import SkipTracer from './pages/SkipTracer';
import OfferCalc from './pages/OfferCalc';
import Error from './pages/Error';
import Login from './pages/Login';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/skip" element={<SkipTracer />} />
                <Route path="/calc" element={<OfferCalc />} />
                <Route path="/error" element={<Error />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
};
