// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router';
// import RecipeCard from './RecipeCard';

// const MyRecipes = () => {
//     const recipes =  useLoaderData();
//     console.log(recipes);
//     const [Recipes, setRecipe] = useState(recipes)
    
//     return (
//         <div>
//             <div className=' p-20 gap-6 space-y-5'>
//                 {
//                     recipes.map(recipe => <RecipeCard key={recipe._id} Recipes={Recipes} setRecipe={setRecipe} recipe={recipe}></RecipeCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default MyRecipes;




import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import RecipeCard from './RecipeCard';

const MyRecipes = () => {
  const { user, loading } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/recipes?email=${user.email}`)
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(err => console.error(err));
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='p-20 gap-6 space-y-5'>
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe._id}
          Recipes={recipes}
          setRecipe={setRecipes}
          recipe={recipe}
        />
      ))}
    </div>
  );
};

export default MyRecipes;
