import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';

const MyRecipes = () => {
    const recipes =  useLoaderData();
    console.log(recipes);
    const [Recipes, setRecipe] = useState(recipes)
    
    return (
        <div>
            <div className=' p-20 gap-6 space-y-5'>
                {
                    recipes.map(recipe => <RecipeCard key={recipe._id} Recipes={Recipes} setRecipe={setRecipe} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default MyRecipes;