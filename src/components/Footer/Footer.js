import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="main-footer">
                <Container>
                    <div className="footer">
                    </div>
                    <div className="footer-item">
                        <div>
                            <h3>About</h3>
                            <p>Our Story</p>
                            <p>Awards</p>
                            <p>Our Team</p>
                            <p>Career</p>
                        </div>
                        <div>
                            <h3>Company</h3>
                            <p>Our Services</p>
                            <p>Clients</p>
                            <p>Contact</p>
                            <p>Press</p>
                        </div>
                        <div>
                            <h3>Resources</h3>
                            <p>Blog</p>
                            <p>Newsletter</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div>
                            <h3>Subscribes</h3>
                            <input type="text" placeholder="Enter your email address" />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="footer-icon">
                <Container>
                    <div>
                        <p>All Rights Reserved Cox's Bazar University</p>
                    </div>
                </Container>
            </div>
        </div>
    );
};
export default Footer;