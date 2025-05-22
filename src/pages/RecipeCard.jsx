import React, { useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const RecipeCard = ({ recipe, Recipes, setRecipe }) => {
  //  const [recipes, setRecipes] = useState(recipe);

  const {
    _id,
    title,
    Image,
    Ingredients,
    Instructions,
    Cuisine,
    Preparation,
    categories,
    likeCount,
  } = recipe;

  const handleDelete = (_id) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        // connect to mongo
        fetch(`http://localhost:3000/recipes/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount === 1) {
              // const remainingRecipes = recipe.filter(recipes => recipe._id !== _id);
              // recipe(remainingRecipes)

              Swal.fire({
                title: "Deleted!",
                text: "Your recipe has been deleted.",
                icon: "success"
              });

              const remainingRecipes = Recipes.filter(rec => rec._id !== _id);
              setRecipe(remainingRecipes)
            }
          })
      }
    });
  }

  return (
    <div>
      <div className=" bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-5 ml-20 ">
        <img
          className="w-full h-56 object-cover rounded-2xl"
          src={Image}
          alt={title}
        />

        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mb-1"><strong>Cuisine:</strong> {Cuisine}</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Category:</strong> {categories}</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Prep Time:</strong> {Preparation} mins</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Likes:</strong> {likeCount || 0}</p>

          <div className="mt-3">
            <p className="text-sm text-gray-700"><strong>Ingredients:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-2">
              {Ingredients?.split('",').map((item, index) => (
                <li key={index}>{item.replace(/["\[\]]/g, '').trim()}</li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-gray-700 mt-2"><strong>Instructions:</strong></p>
          <p className="text-sm text-gray-600">{Instructions}</p>

          <div className="flex justify-between mt-5 p-10">
            <Link to={`/updateRecipe/${_id}`}>
            <button className="px-4 py-2 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Update
            </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;