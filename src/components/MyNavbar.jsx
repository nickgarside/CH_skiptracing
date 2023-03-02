import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MyNavbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: 'white', display: 'flex', allignItems: 'center', fontWeight: 'bold', height: '50px'}}>
            <a class="navbar-brand" href="/" style={{display: 'flex', allignItems: 'center', textDecoration: 'none', color: 'black', fontWeight: 'bold'}}><img src='logo185.png' width='60' height='60' alt='Logo' style={{padding: '10px', allignItems: 'center'}}/></a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{display: 'flex'}}>
            <ul class="navbar-nav mr-auto" style={{display: 'flex', alignItems: 'center', listStyleType: 'none'}}>
                <li class="nav-item">
                <a class="nav-link" href="/skip" style={{textDecoration: 'none', color: 'black'}}>Skiptracing</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link" href="/calc" id="nav-calc" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{textDecoration: 'none', color: 'black', marginLeft: '20px', marginRight: '20px'}}>
                    Calculator
                </a>
                </li>
            </ul>
            </div>

            <div style={{display: 'flex', marginRight: '20px', height: '30px'}}>
            <form class="form-inline my-2 my-lg-0" style={{display: 'flex', alignItems: 'center', paddingRight: '20px'}}>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{backgroundColor: '#2d81d6', borderColor: '#2d81d6', color: 'white', marginLeft: '5px'}}>Search</button>
            </form>
            <a href="/login" style={{color: '#2d81d6', textDecoration: 'none', display: 'flex', alignItems: 'center'}}>Login</a>
            </div>
            
        </nav>
    );
};
