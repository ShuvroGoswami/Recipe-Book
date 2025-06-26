import React from 'react';
// import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateRecipe = () => {

    const {_id, title, Image, Ingredients, Preparation, Instructions, Cuisine, categories } = useLoaderData();

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const UpdateRecipe = Object.fromEntries(formData.entries())
        console.log(UpdateRecipe);

        // update recipe send mongodb
        fetch(`https://b11a10-server-side-shuvro-goswami.vercel.app/recipes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(UpdateRecipe)
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount){
             Swal.fire({
              title: "Good job!",
              text: "Your recipe updated successfully!",
              icon: "success"

            });
           }
        })
    }

    return (
        <div className='p-20'>
          {/* <Helmet>
            <title>Update-recipe</title>
          </Helmet> */}
            <div className='p-8'>
                <h1 className='text-center font-bold text-2xl m-4'>Update your recipe</h1>
            <p className='text-center font-bold'>You can update your recipes from here.</p>
            </div>

            <form onSubmit={handleUpdate}>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
    
    {/* Title */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Title</label>
      <input type="text" name='title' defaultValue={title} className="input w-full" 
       placeholder="Title" />
    </fieldset>

    {/* Image URL */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Image</label>
      <input type="text" name='Image' defaultValue={Image} className="input w-full" placeholder="Image URL" />
    </fieldset>

    {/* Ingredients */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Ingredients</label>
      <input type="text" name='Ingredients' defaultValue={Ingredients} className="input w-full" placeholder="Ingredients" />
    </fieldset>

    {/* Preparation Time */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Preparation Time</label>
      <input type="number" name='Preparation' defaultValue={Preparation} className="input w-full" placeholder="Preparation Time (minutes)" />
    </fieldset>

    {/* Instructions */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Instructions</label>
      <input type="text" name='Instructions' defaultValue={Instructions} className="input w-full" placeholder="Instructions" />
    </fieldset>

    {/* Cuisine Type Dropdown */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Cuisine Type</label>
      <select name="Cuisine" defaultValue={Cuisine} className="select w-full">
        <option value="">-- Select Cuisine --</option>
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="Indian">Indian</option>
        <option value="Chinese">Chinese</option>
        <option value="Others">Others</option>
      </select>
    </fieldset>

    {/* Categories Checkboxes */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 md:col-span-2">
      <label className="label">Categories</label>
      <div className="flex flex-wrap gap-4">
        {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map((category) => (
          <label key={category} className="flex items-center gap-2">
            <input type="checkbox" name="categories" defaultValue={categories} value={category} className="checkbox checkbox-sm" />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </fieldset>
  </div>
  <input className='btn w-full mt-3' type="submit" value='Update Recipe' />
</form>


        </div>
    );
};

export default UpdateRecipe;