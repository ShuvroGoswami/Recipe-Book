import React from 'react';
import { Link, Outlet } from 'react-router';
import { IoHome } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CgProfile } from 'react-icons/cg';
import { SiInstatus } from 'react-icons/si';

const DashbordLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
    
    {/* Navbar */}
    <div className="navbar bg-base-300 w-full lg:hidden">
      <div className="flex-none ">
        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard </div>
      <div className="hidden flex-none lg:hidden">
        
      </div>
    </div>
    {/* Page content here */}
    <Outlet></Outlet>
    {/* Page content here */}
   
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><Link className='bg-blue-500 mb-1' to='/'><IoMdArrowRoundBack /><IoHome /></Link></li>
      <li><Link className='bg-blue-500 mb-1' to='/dashboard/status'><SiInstatus /> Status</Link></li>
      <li><Link className='bg-blue-500 mb-1' to='/dashboard/profile'><CgProfile></CgProfile> Profile</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default DashbordLayout;