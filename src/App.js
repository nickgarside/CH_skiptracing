import React, { useState } from "react";
import AppRouter from './AppRouter';
import './App.css';

export default function App() {
  return (
    <div style={{color: 'white'}}>
      <ul id='nav-list'>
        <li><a href='http://localhost:3000/skip'>SkipTracer</a></li>
        <li><a href='http://localhost:3000/calc'>OfferCalc</a></li>
      </ul>
      <AppRouter />
    </div>
  );
}