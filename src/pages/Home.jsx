import React from 'react';
import AllRecipe from './AllRecipe';
import { Link, useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';
import AllRecipeCard from './AllRecipeCard';
import Hero from '../Component/Hero';
import TipsSection from '../Component/TipsSection';
import RealStoriesSection from '../Component/RealStoriesSection ';



const Home = () => {
    const recipes = useLoaderData();
    console.log(recipes);

    const topRecipes = recipes
        .sort((a, b) => b.likes - a.likes)
        .slice(0, 6);

    return (
        <div className='w-11/12 mx-auto'>
            <Hero className='mb-4'></Hero>
            <TipsSection></TipsSection>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                {
                    topRecipes.map(recipe => <AllRecipeCard key={recipe._id} recipe={recipe}></AllRecipeCard>)
                }
            </div>
            <Link to='/allrecipe'>
            <button className="bg-blue-500 flex ml-140 my-5 hover:bg-blue-600 text-white px-4 py-2 rounded">
                     All recipe
                 </button>
            </Link>
            <RealStoriesSection></RealStoriesSection>
        </div>
    );
};

export default Home;