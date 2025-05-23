// import React, { use, useState } from 'react';
// import { useLoaderData } from 'react-router';
// import RecipeCard from './RecipeCard';
// import { AuthContext } from '../provider/AuthProvider';

// const MyRecipes = () => {
//    const  {user} = use(AuthContext)
//     const recipes =  useLoaderData();
//     console.log(recipes);
//     const [Recipes, setRecipe] = useState(recipes)
    
//     return (
//         <div>
//             <div className=' p-20 gap-6 space-y-5'>
//                 {
//                     Recipes.map(recipe => <RecipeCard key={recipe._id} Recipes={Recipes} setRecipe={setRecipe} recipe={recipe}></RecipeCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default MyRecipes;




// // import React, { useContext, useEffect, useState } from 'react';
// // import { AuthContext } from '../provider/AuthProvider';
// // import RecipeCard from './RecipeCard';

// // const MyRecipes = () => {
// //   const { user, loading } = useContext(AuthContext);
// //   const [recipes, setRecipes] = useState([]);

// //   useEffect(() => {
// //     if (!loading && user?.email) {
// //       fetch(`http://localhost:3000/recipes?email=${user.email}`)
// //         .then(res => res.json())
// //         .then(data => setRecipes(data))
// //         .catch(err => console.error("Error fetching user recipes:", err));
// //     }
// //   }, [user, loading]);

// //   if (loading) return <div>Loading...</div>;

// //   return (
// //     <div className="p-10">
// //       <h2 className="text-xl font-bold mb-4">My Recipes</h2>
// //       {recipes.length === 0 ? (
// //         <p>You haven't added any recipes yet.</p>
// //       ) : (
// //         recipes.map(recipe => (
// //           <RecipeCard key={recipe._id} recipe={recipe} />
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default MyRecipes;


// // import React, { useContext, useEffect, useState } from 'react';
// // import { AuthContext } from '../provider/AuthProvider';
// // import RecipeCard from './RecipeCard';

// // const MyRecipes = () => {
// //   const { user, loading } = useContext(AuthContext); // get current user
// //   const [recipes, setRecipes] = useState([]); // store user's recipes

// //   useEffect(() => {
// //     // When user is loaded and email is available
// //     if (!loading && user?.email) {
// //       fetch(`http://localhost:3000/recipes?email=${user.email}`)
// //         .then(res => res.json())
// //         .then(data => {
// //           setRecipes(data);
// //         })
// //         .catch(err => {
// //           console.error('Failed to fetch recipes:', err);
// //         });
// //     }
// //   }, [user, loading]); // re-run when user or loading changes

// //   if (loading) return <p>Loading...</p>;

// //   return (
// //     <div className="p-10">
// //       <h2 className="text-xl font-bold mb-4">My Recipes</h2>
// //       {recipes.length === 0 ? (
// //         <p>You haven't added any recipes yet.</p>
// //       ) : (
// //         recipes.map(recipe => (
// //           <RecipeCard key={recipe._id} recipe={recipe} />
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default MyRecipes;

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router';

const MyRecipes = () => {
  const { user, loading } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!loading && user?.email) {
      // Fetch only this user's recipes
      fetch(`http://localhost:3000/recipes?email=${user.email}`)
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(err => console.error("Error fetching user recipes:", err));
    }
  }, [user, loading]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-10">
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
