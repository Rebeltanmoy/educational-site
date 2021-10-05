import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/notFound.png';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <img src={img} alt="" className=" w-100 h-50" />
            <Link to="/home" className="back-home"><i className="fas fa-arrow-left"></i>Home</Link>
        </div>
    );
};

export default NotFound;