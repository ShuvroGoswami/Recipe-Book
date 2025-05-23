import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useNavigate } from 'react-router';
// import { Helmet } from 'react-helmet';

const Profile = () => {
    const  {user, logOut} = use(AuthContext)
    console.log(user);
    const navigate = useNavigate();
    const handleLogout =()=>{
    logOut()
    .then(() => {
    //   alert("you logged out successfully")
     navigate(-1);
       
    }).catch((error) => {
      
      console.log(error);
    }); 
  }
    return (
        <div className='flex flex-col items-center justify-center border bg-gray-800 w-100 p-20 rounded-2xl ml-110 my-10'>
          {/* <Helmet>
            <title>Profile</title>
          </Helmet> */}
            <div className=''>
            <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-44 rounded-full ring-2 ring-offset-2 mb-5">
    <img src={user?.photoURL} />
  </div>
</div>
            {/* <img className='w-50 h-50 rounded-full' src={user?.photoURL} alt="" /> */}
            <p className='text-2xl font-bold text-center text-white'>{user?.displayName}</p>
            <p className='text-xl font-bold text-center text-white'>{ user?.email}</p>
            </div>

            
            <button onClick={handleLogout} className='btn ml-3 mt-7'>LogOut</button>
            
        </div>
    );
};

export default Profile;

