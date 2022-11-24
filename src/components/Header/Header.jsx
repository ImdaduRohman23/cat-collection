import React from 'react';
import { Button } from 'react-bootstrap';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__content">
                <h1>CAT COLLECTION</h1>
                <h3>Find your favorite cat!</h3>
                <Button>Lets go</Button>
            </div>
        </div>
    )
}

export default Header
