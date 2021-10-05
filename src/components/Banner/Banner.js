import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import images1 from '../../images/img (1).jpg';
import images2 from '../../images/img (2).jpg';
import images3 from '../../images/img (3).jpg';

const Banner = () => {
    return (
        <Carousel controls={false} fade={true}>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 slider-img"
                    src={images1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="banner-text">Welcome to Cox's Bazar University</h3>
                    <p className="banner-content">Learning is our passion, Where you find the best teacher of the world</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 slider-img"
                    src={images3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="banner-text">Welcome to Cox's Bazar University</h3>
                    <p className="banner-content">Learning is our passion, Where you find the best teacher of the world</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 slider-img"
                    src={images2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="banner-text">Welcome to Cox's Bazar University</h3>
                    <p className="banner-content">Learning is our passion, Where you find the best teacher of the world</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;