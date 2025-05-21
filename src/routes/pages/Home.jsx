import React from 'react';
import { useLoaderData } from 'react-router';
import AllRecipe from './AllRecipe';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1>home</h1>
            <AllRecipe data={data}></AllRecipe>
        </div>
    );
};

export default Home;