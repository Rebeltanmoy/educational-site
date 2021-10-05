import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DisplayCard from '../DisplayCard/DisplayCard';
import './HomeCard.css';

const HomeCard = () => {
    const [home, setHome] = useState([])
    useEffect(() => {
        const url = './school.JSON'
        fetch(url)
            .then(res => res.json())
            .then(data => setHome(data))
    }, [])
    const value = home.slice(0, 4)
    return (
        <div >
            {/* <h3>home {value.length}</h3> */}
            <Container className="text-center my-4">
                <Row xs={1} md={3} className="g-4">
                    {
                        value.map(home => <DisplayCard home={home}></DisplayCard>)
                    }
                </Row>
                <Link className="more-services" to="/services">view more</Link>
            </Container>
        </div>
    );
};

export default HomeCard;