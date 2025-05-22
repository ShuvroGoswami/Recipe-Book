import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
           <div className='w-11/12 mx-auto py-5 flex justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               
                    <title>
                        Register
                    </title>
                
                <h2 className='text-2xl font-bold text-center py-3'>Register your account</h2>
                <form  className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Name"
                            required
                        />

                        {/* Photo */}
                        <label className="label">Photo</label>
                        <input
                            type="text"
                            name="photo"
                            className="input"
                            placeholder="Photo URL"
                            required
                        />

                        {/* Email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input"
                            placeholder="Password"
                            required
                        />

                        {/* Show password error */}
                        {/* {passError && (
                            <p className='text-red-400 text-xs whitespace-pre-line'>
                                {passError}
                            </p>
                        )} */}

                        {/* Submit button */}
                        <button type="submit" className="btn btn-neutral mt-4 mb-1">
                            Register
                        </button>

                        <p className="text-sm mb-3">
                            You have an account? <Link to="/login" className="link link-hover">Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Register;