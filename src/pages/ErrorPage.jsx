import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className=' items-center'>
            <img className=' ml-65 md:ml-70 lg:ml-165 mt-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnqSfH6B8kj45g5GQSSOcfBUwjss6vQ6oHaoOxV6WXAwHu1ovP8Sj09tpcH-yDkRQsd8&usqp=CAU" alt="" />
            {/* <h1 className='text-red-500 text-2xl font-bold text-center mt-5'>No Doctor found !!</h1> */}
            <p className='text-gray-700 text-center my-4'>You should return home.</p>
            <Link to="/">
            <button className='btn  btn-primary rounded-2xl ml-75 md:ml-80 lg:ml-180 mt-5'>Back to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;