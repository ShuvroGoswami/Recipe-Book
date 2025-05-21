import React from 'react';

const AddRecipes = () => {

    const handleAddRecipe = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const NewRecipes = Object.fromEntries(formData.entries())
        console.log(NewRecipes);

        // send data to db
        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(NewRecipes)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('recipe added',data);
        })

    }

    return (
        <div className='p-20'>
            <div className='p-8'>
                <h1 className='text-center font-bold text-2xl m-4'>Add recipe</h1>
            <p className='text-center font-bold'>You can add your own recipe here.</p>
            </div>

            <form onSubmit={handleAddRecipe}>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
    
    {/* Title */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Title</label>
      <input type="text" name='title' className="input w-full" 
       placeholder="Title" />
    </fieldset>

    {/* Image URL */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Image</label>
      <input type="text" name='Image' className="input w-full" placeholder="Image URL" />
    </fieldset>

    {/* Ingredients */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Ingredients</label>
      <input type="text" name='Ingredients' className="input w-full" placeholder="Ingredients" />
    </fieldset>

    {/* Preparation Time */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Preparation Time</label>
      <input type="number" name='Preparation' className="input w-full" placeholder="Preparation Time (minutes)" />
    </fieldset>

    {/* Instructions */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Instructions</label>
      <input type="text" name='Instructions' className="input w-full" placeholder="Instructions" />
    </fieldset>

    {/* Cuisine Type Dropdown */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Cuisine Type</label>
      <select name="Cuisine" className="select w-full">
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
            <input type="checkbox" name="categories" value={category} className="checkbox checkbox-sm" />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </fieldset>
  </div>
  <input className='btn w-full mt-3' type="submit" value='Add Recipe' />
</form>


        </div>
    );
};

export default AddRecipes;