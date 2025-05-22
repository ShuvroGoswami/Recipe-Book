import React from 'react';

const RecipeCard = ({recipe}) => {

    const {title,Cuisine, Image} = recipe;
    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={Image}
      alt="recipe" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Food name: {title}</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default RecipeCard;