import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Status = () => {
    const recipes = useLoaderData();

    const { user, loading } = useContext(AuthContext);
      const [recipe, setRecipes] = useState([]);
    
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
        <div className='m-10 grid grid-cols-2'>
            <div className="card text-black bg-gradient-to-r from-orange-300 to-yellow-200  w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Total recipes </h2>
    <p>{recipes.length}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>

{/* my total product */}
            <div className="card text-black bg-gradient-to-r from-orange-300 to-yellow-200  w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title">MY total recipe </h2>
    <p>{ recipe.length}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
    );
};

export default Status;