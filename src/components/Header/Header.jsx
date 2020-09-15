import React from 'react';
import { Button } from 'react-bootstrap';
import './Header.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function header() { 
    return (
        <div className="header">
            <div className="container">
                <div className="content">
                <Router>
                    <div className="header__logo">
                        <Link to="/">
                            <img src="https://digiscorp.com/wp-content/themes/doit/img/digis-logo-white.png" alt="logo"/>
                        </Link>
                    </div>
                    <div className="btns-area">
                    
                        <Link to="/signin">
                            <Button>Sign In</Button>
                        </Link>
                        <Link to="/signup">
                            <Button>Sign Up</Button>
                        </Link>
                    </div>
                </Router>
                </div>
            </div>
        </div>
    )
}
