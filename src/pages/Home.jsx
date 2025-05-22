import React from 'react';
import AllRecipe from './AllRecipe';
import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';
import AllRecipeCard from './AllRecipeCard';



const Home = () => {
    const recipes = useLoaderData();
    console.log(recipes);

    const topRecipes = recipes
        .sort((a, b) => b.likes - a.likes)
        .slice(0, 6);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    topRecipes.map(recipe => <AllRecipeCard key={recipe._id} recipe={recipe}></AllRecipeCard>)
                }
            </div>
            <button className="bg-blue-500 flex ml-140 my-5 hover:bg-blue-600 text-white px-4 py-2 rounded">
                     View Details
                 </button>
        </div>
    );
};

export default Home;