// import React from 'react';

// const AllRecipe = ({data}) => {
//     return (
//          <div className="container mx-auto p-6">
//       {/* Grid layout for recipes */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {data.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
//           >
//             {/* Recipe image */}
//             <img
//               src={recipe.image}
//               alt={recipe.name}
//               className="w-full h-56 object-cover"
//             />

//             {/* Recipe content */}
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.name}</h3>
//               <p className="text-sm text-gray-500 mb-4">{recipe.cuisine}</p>
//               <p className="text-sm text-gray-600">{recipe.description}</p>

//               {/* Details Button */}
//               <button
//                 onClick={() => alert(`Details for ${recipe.name}`)}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
//               >
//                 Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     );
// };

// export default AllRecipe;

// import React, { useState, useEffect } from 'react';

// const AllRecipe = ({ data }) => {
//   // State for selected cuisine and filtered recipes
//   const [selectedCuisine, setSelectedCuisine] = useState('All');
//   const [filteredRecipes, setFilteredRecipes] = useState(data);

//   // Get unique cuisines from the data
//   const cuisines = [
//     'All', 
//     ...new Set(data.map((recipe) => recipe.cuisine)), // Adds "All" and unique cuisines
//   ];

//   // Filter recipes based on selected cuisine
//   const handleCuisineChange = (event) => {
//     const cuisine = event.target.value;
//     setSelectedCuisine(cuisine);

//     if (cuisine === 'All') {
//       setFilteredRecipes(data); // Show all recipes if "All" is selected
//     } else {
//       setFilteredRecipes(data.filter((recipe) => recipe.cuisine === cuisine)); // Filter by selected cuisine
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {/* Dropdown to select cuisine */}
//       <div className="mb-6">
//         <label htmlFor="cuisine" className="text-lg font-semibold text-gray-700 mr-4">Filter by Cuisine Type:</label>
//         <select
//           id="cuisine"
//           value={selectedCuisine}
//           onChange={handleCuisineChange}
//           className="px-4 py-2 bg-white border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         >
//           {cuisines.map((cuisine) => (
//             <option key={cuisine} value={cuisine}>
//               {cuisine}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Grid layout for filtered recipes */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {filteredRecipes.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
//           >
//             {/* Recipe image */}
//             <img
//               src={recipe.image}
//               alt={recipe.name}
//               className="w-full h-56 object-cover"
//             />

//             {/* Recipe content */}
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.name}</h3>
//               <p className="text-sm text-gray-500 mb-4">{recipe.cuisine}</p>
//               <p className="text-sm text-gray-600">{recipe.description}</p>

//               {/* Details Button */}
//               <button
//                 onClick={() => alert(`Details for ${recipe.name}`)}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
//               >
//                 Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllRecipe;

import React, { useState } from 'react';
import { Link } from 'react-router';

const AllRecipe = ({ data }) => {
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [likes, setLikes] = useState(
    data.reduce((acc, recipe) => {
      acc[recipe.id] = 0;
      return acc;
    }, {})
  );

  const cuisines = ['All', ...new Set(data.map((recipe) => recipe.cuisine))];

  const filteredRecipes =
    selectedCuisine === 'All'
      ? data
      : data.filter((recipe) => recipe.cuisine === selectedCuisine);

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDetails = (recipe) => {
    // alert(`Details for ${recipe.name}`);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Filter */}
      <div className="mb-6">
        <label className="text-lg font-semibold mr-4">Filter by Cuisine:</label>
        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="px-4 py-2 rounded border shadow-sm"
        >
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {recipe.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{recipe.cuisine}</p>

              <div className="mt-auto flex justify-between items-center gap-2">
                {/* Like Button */}
                <button
                  onClick={() => handleLike(recipe.id)}
                  className="flex items-center bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 text-sm"
                >
                  ❤️ {likes[recipe.id]} Like
                </button>

                {/* Details Button */}
                <Link to={`/recipesDetails/${recipe.id}`}
                  onClick={() => handleDetails(recipe)}
                  className="bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-500 text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipe;

