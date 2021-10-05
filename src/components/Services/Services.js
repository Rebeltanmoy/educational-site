import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DisplayService from '../DisplayService/DisplayService';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./school.JSON')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className="services-content">
            <Container>
                <div>
                    <h2>All Services</h2>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(services => <DisplayService services={services} key={services.key}></DisplayService>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;