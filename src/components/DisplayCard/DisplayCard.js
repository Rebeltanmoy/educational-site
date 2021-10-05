import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './DisplayCard.css'

const DisplayCard = (props) => {
    const { name, img, price, description, rating } = props.home;
    return (
        <div>
            <Card gap={4} className="card-content">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className="card-item">
                        <h3>${price}</h3>
                    </div>

                </Card.Body>
                <Card.Footer>
                    <Button>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default DisplayCard;