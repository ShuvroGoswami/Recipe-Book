// import React from 'react';
// import { Link } from 'react-router';

// const AllRecipeCard = ({recipe}) => {
//     console.log(recipe);
//     const {title, _id, Cuisine, Image, likes} = recipe;
//     return (
//         <div>
//             <div className="border rounded shadow-md p-4">
//              <img
//                  src={Image}
//                  className="w-full h-48 object-cover rounded mb-4"
//              />
//              <h2 className="text-xl font-semibold mb-2">{title}</h2>
//              <p className="text-gray-600 mb-2">Cuisine: {Cuisine}</p>
//              <p className="text-gray-800 mb-4">Likes: {likes}</p>
//              <Link to={`/recipesDetails/${recipe._id}`}>
//                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
//                      View Details
//                  </button>
//              </Link>
//          </div>
         
//         </div>
//     );
// };

// export default AllRecipeCard;


// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const AllRecipeCard = ({ recipe }) => {
// //     const { _id, title, cuisine, image, likes } = recipe;

// //     return (
// //         <div className="border rounded shadow-md p-4 bg-white">
// //             <img
// //                 src={image || 'https://via.placeholder.com/300x200?text=No+Image'}
// //                 alt={title}
// //                 className="w-full h-48 object-cover rounded mb-4"
// //             />
// //             <h2 className="text-xl font-semibold mb-2">{title}</h2>
// //             <p className="text-gray-600 mb-2">Cuisine: {cuisine}</p>
// //             <p className="text-gray-800 mb-4">Likes: {likes}</p>
// //             <Link to={`/recipes/${_id}`}>
// //                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
// //                     View Details
// //                 </button>
// //             </Link>
// //         </div>
// //     );
// // };

// // export default AllRecipeCard;

import React from 'react';
import { Link } from 'react-router';

const AllRecipeCard = ({ recipe }) => {
    const { title, _id, Cuisine, Image, likeCount } = recipe;

    return (
        <div className="border rounded shadow-md p-4">
            <img
                src={Image}
                className="w-full h-48 object-cover rounded mb-4"
                alt={title}
            />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-300 mb-2">Cuisine: {Cuisine}</p>
            <p className="text-gray-300 mb-4">Likes: {likeCount}</p>
            <Link to={`/recipesDetails/${_id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default AllRecipeCard;

