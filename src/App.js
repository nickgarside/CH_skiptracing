import React, { useState } from "react";
import AppRouter from './AppRouter';
import './App.css';

export default function App() {
  return (
    <div style={{color: 'white'}}>
      <ul id='nav-list'>
        <li><a href='https://ch-skiptracing.vercel.app/skip'>SkipTracer</a></li>
        <li><a href='https://ch-skiptracing.vercel.app/calc'>OfferCalc</a></li>
      </ul>
      <AppRouter />
    </div>
  );
}