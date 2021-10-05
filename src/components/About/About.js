import React from 'react';
import AboutImg from '../../images/about.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <Row xs={1} md={2}>
                <Col>
                    <img src={AboutImg} alt="" />
                </Col>
                <Col className="about-content">
                    <h6>An Unordinary Leader</h6>
                    <h2>Head of University Welcome</h2>
                    <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut. Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.</p>
                    <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut. Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.</p>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col className=" justify-content-center w-50 text-center about-heading">
                        <p>YOU CAN LEARN</p>
                        <h1>About Our University</h1>
                    </Col>
                </Row>
                <div className="about-item">
                    <h4>Hello. Our university has been present for over 20 years. We make the most of all our students.</h4>
                    <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut. Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.</p>
                    <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut. Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.</p>
                </div>
            </Container>
        </div>
    );
};

export default About;