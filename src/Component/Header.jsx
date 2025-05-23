import React, { use, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { ThemeContext } from '../provider/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  const  {user, logOut} = use(AuthContext)
  // const handleLogout =()=>{
  //   logOut()
  //   .then(() => {
  //     alert("you logged out successfully")
  //   }).catch((error) => {
      
  //     console.log(error);
  //   }); 
  // }
  const link = <>
    <NavLink to="/"  className='mr-3 '>Home</NavLink>
    <NavLink to='/allrecipe' className='mr-3 '>AllRecipe</NavLink>
        <NavLink to="/addrecipes" className='mr-3 '>AddRecipes</NavLink>
        <NavLink to="/myrecipes" className='mr-3 '>MyRecipes</NavLink>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <img className="w-13 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubPpRvW0NICM48NPMzoXLMWaHve3ymTU25Q&s" alt="" />
    <a className=" ml-2 font-bold text-orange-200 text-xl">Recipe Book</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    {/* <Link to='/register'>
    <button className="btn">Register</button>
    </Link>
    <Link to='/login'>
    <button className="btn">Login</button>
                    <button onClick={handleLogout} className='btn ml-3 '>LogOut</button>
                    <Link to='/profile'><CgProfile className='btn w-15'></CgProfile></Link>
    </Link> */}

     {
            user ? (<> <Link to='/profile'>profile</Link>
                            
            </>) : (<><Link to='login' className="btn mr-3 ">Login</Link>
              <Link to="/register" className="btn  ">Register</Link></>)
          }


  </div>
      <button
      onClick={toggleTheme}
      className="p-2 border rounded btn ml-3"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>

</div>
    );
};

export default Header;