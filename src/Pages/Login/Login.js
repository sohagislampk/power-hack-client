import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center gap-10">
            <div className="text-center mx-w-sm lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Please login to access your data</p>
            </div>
            <div className="card-body max-w-sm shadow-2xl bg-base-100 rounded-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link to={'/register'} className="label-text-alt link link-hover">Don't Have Account? Register Now</Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;