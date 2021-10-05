import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import img from '../../images/img (2).jpg';
import img1 from '../../images/img (1).jpg';
import img2 from '../../images/img (3).jpg';
import './Blog.css'
import Button from '@restart/ui/esm/Button';

const Blog = () => {
    return (
        <div>
            <Container>
                <Row className=" my-5 text-center justify-content-center w-50 m-auto">
                    <Col className="blog-item">
                        <p>Blog Article</p>
                        <h2>Our Latest Blog Article</h2>
                        <h6>Check out our latest blog posts, news and articles. We have articles on a range of topics such as the leaving certificate and career guidance.</h6>
                    </Col>
                </Row>
                <Row className="blog">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Berlin Cryptocurrency & Blockchain Conference</Card.Title>
                                <Card.Text>
                                    Everybody is welcome to our conference this is a free event, just register here and come visit us.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Your Complete Guide to Photography</Card.Title>
                                <Card.Text>
                                    Everybody is welcome to our conference this is a free event, just register here and come visit us.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Digital Art & 3D Model – a future for film company</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;