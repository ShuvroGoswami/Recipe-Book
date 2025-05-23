

import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router';
// import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser, setUser, updateUser, user} = use(AuthContext);
    const [passError, setPassError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        // Password validation
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUpperCase || !hasLowerCase || !isLongEnough) {
            let errorMsg = "Password must:";
            if (!hasUpperCase) errorMsg += "\n- contain at least one uppercase letter";
            if (!hasLowerCase) errorMsg += "\n- contain at least one lowercase letter";
            if (!isLongEnough) errorMsg += "\n- be at least 6 characters long";

            setPassError(errorMsg);
            return;
        }

        setPassError(""); // Clear errors if all checks pass

        createUser(email, password)
            .then((result) => {
                // console.log(result);
                const user = result.user;
                updateUser({displayName: name, photoURL: photo, email: email})
                .then(()=>{
                    setUser({...user, displayName: name, photoURL: photo, email: email});
                    navigate("/");
                })
                .catch((error) => {
                   console.log(error);
                   setUser(user);
                  });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(error);
                alert(errorMessage);
            });
    };
        console.log(user);
    return (
        <div className='w-11/12 mx-auto py-5 flex justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                {/* <Helmet>
                    <title>
                        Register
                    </title>
                </Helmet> */}
                <h2 className='text-2xl font-bold text-center py-3'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
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
                        {passError && (
                            <p className='text-red-400 text-xs whitespace-pre-line'>
                                {passError}
                            </p>
                        )}

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
    );
};

export default Register;
