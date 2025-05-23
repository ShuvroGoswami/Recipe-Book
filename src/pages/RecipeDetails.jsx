import { useState, useEffect, use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const RecipeDetails = () => {
  const  {user} = use(AuthContext)
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






// import { useState, useContext } from 'react';
// import { useLoaderData } from 'react-router';
// import { AuthContext } from '../provider/AuthProvider';

// const RecipeDetails = () => {
//   const { user } = useContext(AuthContext);
//   const recipe = useLoaderData();
//   const [likes, setLikes] = useState(recipe.likeCount || 0);

//   // DEBUG logs
//   console.log('Current user:', user);
//   console.log('Recipe ownerId:', recipe.ownerId);
//   console.log('Is owner:', user && recipe.ownerId?.toString() === user._id?.toString());

//   // Fix with toString()
//   const isOwner = user && recipe.ownerId?.toString() === user._id?.toString();

//   const handleLike = async () => {
//     try {
//       const res = await fetch(`http://localhost:3000/recipes/${recipe._id}/like`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const data = await res.json();

//       if (res.ok) {
//         setLikes(data.likeCount);
//       } else {
//         console.error('Failed to update like count');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 rounded shadow">
//       <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
//       <img className="w-full h-80 object-cover rounded mb-4" src={recipe.Image} alt="" />
//       <p><strong>Cuisine:</strong> {recipe.Cuisine}</p>
//       <p><strong>Category:</strong> {recipe.categories}</p>
//       <p><strong>Preparation Time:</strong> {recipe.Preparation} mins</p>

//       <div className="my-4">
//         <strong>Ingredients:</strong>
//         <ul className="list-disc list-inside mt-2">
//           {recipe.Ingredients?.split('",').map((item, index) => (
//             <li key={index}>{item.replace(/["\[\]]/g, '').trim()}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="my-4">
//         <strong>Instructions:</strong>
//         <p>{recipe.Instructions}</p>
//       </div>

//       <div className="mt-6 flex items-center gap-4">
//         {!isOwner ? (
//           <button
//             onClick={handleLike}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             👍 Like
//           </button>
//         ) : (
//           <button
//             disabled
//             className="bg-gray-400 cursor-not-allowed text-white px-4 py-2 rounded"
//             title="You cannot like your own recipe"
//           >
//             👍 Like
//           </button>
//         )}
//         <span className="text-lg">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
//       </div>
//     </div>
//   );
// };

// export default RecipeDetails;
