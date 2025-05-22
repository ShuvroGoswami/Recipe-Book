import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';

const MyRecipes = () => {
    const recipes =  useLoaderData();
    console.log(recipes);
    
    return (
        <div>
            <div className=' p-20 space-y-6'>
                {
                    recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default MyRecipes;