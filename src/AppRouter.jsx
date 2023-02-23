import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SkipTracer from './SkipTracer';
import OfferCalc from './OfferCalc';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="./skip" element={<SkipTracer />} />
                <Route path="./calc" element={<OfferCalc />} />
            </Routes>
        </BrowserRouter>
    )
};
