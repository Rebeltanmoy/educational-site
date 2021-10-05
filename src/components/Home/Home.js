import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import HomeCard from '../HomeCard/HomeCard';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <Blog></Blog>
        </div>
    );
};

export default Home;