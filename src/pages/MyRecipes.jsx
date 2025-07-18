import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router';
// import { Helmet } from 'react-helmet-async';

const MyRecipes = () => {
  const { user, loading } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!loading && user?.email) {
      // Fetch only this user's recipes
      fetch(`https://b11a10-server-side-shuvro-goswami.vercel.app/recipes?email=${user.email}`)
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(err => console.error("Error fetching user recipes:", err));
    }
  }, [user, loading]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-10">
      {/* <Helmet>
        <title>My-recipe</title>
      </Helmet> */}
      <h2 className="text-xl font-bold mb-4">My Recipes</h2>
      {recipes.length === 0 ? (
        <p>You haven't added any recipes yet. <Link to='/addrecipes' className="text-blue-600">Add Recipe</Link></p>
      ) : (
        recipes.map(recipe => (
          <RecipeCard
            key={recipe._id}
            recipe={recipe}
            Recipes={recipes}
            setRecipe={setRecipes}
          />
        ))
      )}
    </div>
  );
};

export default MyRecipes;
