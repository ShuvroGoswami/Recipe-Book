import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const RecipeDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const singleData = data.find((recipe) => recipe.id == id)
    const { name,image,cuisine, ingredients, prep_time,how_to_cook} = singleData;
    console.log(singleData);
    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-100 px-6 py-10">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Top Section with Image and Info */}
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                        <img src={image} alt={name} className="h-full w-full object-cover" />
                    </div>
                    <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{name}</h1>
                        <p className="text-lg text-gray-600 mb-1">🍽️ Cuisine: <span className="font-semibold">{cuisine}</span></p>
                        <p className="text-lg text-gray-600 mb-1">⏱️ Prep Time: <span className="font-semibold">{prep_time}</span></p>
                        <div className="mt-4 bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-lg inline-block w-fit">
                            Featured Recipe
                        </div>
                    </div>
                </div>

                {/* Ingredients Section */}
                <div className="p-8 border-t border-orange-200 bg-orange-50">
                    <h2 className="text-2xl font-bold text-orange-700 mb-4">📝 Ingredients</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                        {ingredients?.map((item, index) => (
                            <li key={index} className="text-md">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* How to Cook Section */}
                <div className="p-8 border-t border-gray-200 bg-white">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">👨‍🍳 How to Cook</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-md">
                        {how_to_cook}
                    </p>
                </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-10">
                <a
                    href="/"
                    className="inline-block px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-gray-900 transition duration-300"
                >
                    ⬅ Back to All Recipes
                </a>
            </div>
        </div>
    );
};

export default RecipeDetails;