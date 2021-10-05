import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className="main-header">
            <Container>
                <div className="header">
                    <div>
                        <img src={logo} alt="" />
                        <h5 className="logo">Cox's Bazar University</h5>
                    </div>
                    <nav>
                        <NavLink to="/home" className="menu" activeClassName="selected">Home</NavLink>
                        <NavLink to="/about" className="menu" activeClassName="selected">About</NavLink>
                        <NavLink to="/services" className="menu" activeClassName="selected">Services</NavLink>
                        <NavLink to="/blog" className="menu" activeClassName="selected">Blog</NavLink>
                        <NavLink to="/notfound" className="menu" activeClassName="selected"></NavLink>
                    </nav>
                </div>
            </Container>
        </div>
    );
};

export default Header;