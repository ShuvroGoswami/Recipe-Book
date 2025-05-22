import React from 'react';
import { useLoaderData } from 'react-router';
import AllRecipeCard from './AllRecipeCard';

const AllRecipe = () => {

  const recipes = useLoaderData()

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                {
                    recipes.map(recipe => <AllRecipeCard key={recipe._id} recipe={recipe}></AllRecipeCard>)
                }
            </div>
    </div>
  );
};

export default AllRecipe;