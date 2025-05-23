

import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import AllRecipeCard from './AllRecipeCard';

const AllRecipe = () => {
  const recipes = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  // 🔍 Extract unique cuisine types
  const cuisineTypes = useMemo(() => {
    const all = recipes.map(r => r.Cuisine).filter(Boolean);
    return ['All', ...Array.from(new Set(all))];
  }, [recipes]);

  // 🧠 Filter recipes based on selected cuisine
  const filteredRecipes = useMemo(() => {
    if (selectedCuisine === 'All') return recipes;
    return recipes.filter(recipe => recipe.Cuisine === selectedCuisine);
  }, [selectedCuisine, recipes]);

  return (
    <div className='p-10'>
      {/* Cuisine Filter Dropdown */}
      <div className='mb-5'>
        <label htmlFor="cuisine" className='mr-2  font-semibold'>Filter by Cuisine:</label>
        <select
          id="cuisine"
          value={selectedCuisine}
          onChange={e => setSelectedCuisine(e.target.value)}
          className='p-2 rounded border-1'
        >
          {cuisineTypes.map(cuisine => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      {/* Recipe Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <AllRecipeCard key={recipe._id} recipe={recipe} />
          ))
        ) : (
          <p className='text-white'>No recipes found for "{selectedCuisine}" cuisine.</p>
        )}
      </div>
    </div>
  );
};

export default AllRecipe;
