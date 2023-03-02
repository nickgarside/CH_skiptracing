import React, { useState } from "react";
import AppRouter from './AppRouter';
import './App.css';
import MyNavbar from "./components/MyNavbar";

export default function App() {
  return (
    <div style={{color: 'black'}}>
      <div>
      {<MyNavbar />}
      </div>
      <div>
      <AppRouter />
      </div>
    </div>
  );
}