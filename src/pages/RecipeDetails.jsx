import { useState, useEffect, useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
// import { Helmet } from 'react-helmet-async';

const RecipeDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const recipe = useLoaderData();
  const [likes, setLikes] = useState(recipe.likeCount || 0);

  // Determine if current user is the owner
  const isOwner = user?.email === recipe.email; // ✅ Adjust based on your actual field name


  // Handle like button click
  const handleLike = async () => {
    if (isOwner) return; // Just in case

    try {
      const res = await fetch(`https://b11a10-server-side-shuvro-goswami.vercel.app/recipes/${recipe._id}/like`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (res.ok) {
        setLikes(data.likeCount);
      } else {
        console.error('Failed to update like count');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rounded shadow">
      {/* <Helmet>
        <title>Details Page</title>
      </Helmet> */}
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

      <div className='flex justify-between'>
        <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handleLike}
          disabled={isOwner}
          className={`px-4 py-2 rounded text-white ${isOwner ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
          title={isOwner ? "You can't like your own recipe" : "Like this recipe"}
        >
          👍 Like
        </button>
        <span className="text-lg">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
      </div>
      {/* <button className='btn mt-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white'>Back</button> */}
      <button
  onClick={() => navigate(-1)}
  className='btn mt-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white'
>
  Back
</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
