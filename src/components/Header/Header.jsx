import React from 'react';
import { Button } from 'react-bootstrap';
import './Header.scss'

export default function header() {
    return (
        <div className="header">
            <div className="container">
                <div className="content">
                    <div className="header__logo">
                        <img src="https://digiscorp.com/wp-content/themes/doit/img/digis-logo-white.png" alt="logo"/>
                    </div>
                    <Button>Log In</Button>
                </div>
            </div>
        </div>
    )
}
