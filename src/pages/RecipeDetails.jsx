// import { useState } from 'react';
// import { useLoaderData } from 'react-router';

// const [likes, setLikes] = useState(recipe.likeCount || 0);
// const [liked, setLiked] = useState(false); // Track if user has liked

// const RecipeDetails = () => {
//     const recipe = useLoaderData();
//     // Destructure recipe fields
//      const {
//          title,
//          Cuisine,
//          Image,
//          Ingredients,
//          Preparation,
//          Instructions,
//          categories
//      } = recipe;

//      // State to keep track of likes
//     const [likes, setLikes] = useState(0);

//     // Handler to increment likes
//     // const handleLike = () => {
//     //     setLikes(likes + 1);
//     // };
//     const handleLike = async () => {
//     const endpoint = liked
//         ? `/recipes/${recipe._id}/unlike`
//         : `/recipes/${recipe._id}/like`;

//     try {
//         const res = await fetch(`http://localhost:3000${endpoint}`, {
//             method: 'PATCH',
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (res.ok) {
//             setLikes(prev => liked ? prev - 1 : prev + 1);
//             setLiked(!liked);
//         }
//     } catch (error) {
//         console.error('Error updating like:', error);
//     }
// };


    

//     return (
//         <div className="max-w-3xl mx-auto p-6  rounded shadow">
//            <h1 className="text-3xl font-bold mb-4">{title}</h1>
//            <img className="w-full h-80 object-cover rounded mb-4" src={Image} alt="" />
//             <p><strong>Cuisine:</strong> {Cuisine}</p>
//             <p><strong>Category:</strong> {categories}</p>
//             <p><strong>Preparation Time:</strong> {Preparation} mins</p>
//             <div className="my-4">
//                  <strong>Ingredients:</strong>
//                  <ul className="list-disc list-inside mt-2">
//                      {Ingredients?.split('",').map((item, index) => (
//                         <li key={index}>{item.replace(/["\[\]]/g, '').trim()}</li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="my-4">
//                  <strong>Instructions:</strong>
//                  <p>{Instructions}</p>
//              </div>

//              <div className="mt-6 flex items-center gap-4">
//                 <button
//                     onClick={handleLike}
//                     className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//                 >
//                     👍 Like
//                 </button>
//                 <span className="text-lg">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
//             </div>
           
//         </div>
//     );
// };

// export default RecipeDetails;

import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
    const recipe = useLoaderData();
    const [likes, setLikes] = useState(recipe.likeCount || 0); // Initial like count from loader data
    // const [liked, setLiked] = useState(false); // Track if user has liked the post

    // Handle like button click
    const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:3000/recipes/${recipe._id}/like`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (res.ok) {
        setLikes(data.likeCount);  // Update like count from backend response
      } else {
        console.error('Failed to update like count');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return (
        <div className="max-w-3xl mx-auto p-6 rounded shadow">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <img className="w-full h-80 object-cover rounded mb-4" src={recipe.Image} alt="" />
            <p><strong>Cuisine:</strong> {recipe.Cuisine}</p>
            <p><strong>Category:</strong> {recipe.categories}</p>
            <p><strong>Preparation Time:</strong> {recipe.Preparation} mins</p>
            
            <div className="my-4">
                <strong>Ingredients:</strong>
                <ul className="list-disc list-inside mt-2">
                    {recipe.Ingredients?.split('",').map((item, index) => (
                        <li key={index}>{item.replace(/["\[\]]/g, '').trim()}</li>
                    ))}
                </ul>
            </div>

            <div className="my-4">
                <strong>Instructions:</strong>
                <p>{recipe.Instructions}</p>
            </div>

            <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handleLike}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          👍 Like
        </button>
        <span className="text-lg">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
      </div>
        </div>
    );
};

export default RecipeDetails;

