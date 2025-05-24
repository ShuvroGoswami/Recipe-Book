

import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AllRecipeCard = ({ recipe }) => {
    const  {user} = use(AuthContext)
    const { title, _id, Cuisine, Image, likeCount } = recipe;

    return (
        <div className="border rounded shadow-md p-4">
        

            <img
                src={Image}
                className="w-full h-48 object-cover rounded mb-4"
                alt={title}
            />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className=" mb-2">Cuisine: {Cuisine}</p>
            <p className=" mb-4">Likes: {likeCount}</p>
            <Link to={`/recipesDetails/${_id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default AllRecipeCard;

