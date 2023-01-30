import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Authcontext';

const Login = () => {
    const navigate = useNavigate();
    const { setUserEmail } = useContext(Authcontext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const handleLogin = (data) => {
        setLoginError('');
        fetch(`http://localhost:5000/login?email=${data.email}&password=${data.password}`)
            .then(res => res.json())
            .then(result => {
                if (result._id) {
                    setUserEmail(data.email);
                    toast.success('Login Successfull')
                    navigate('/')
                } else {
                    setLoginError(result.message);

                }
            })
            .catch(e => {
                setLoginError(e.message)
            });
    }
    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center gap-10">
            <div className="text-center mx-w-sm lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Please login to access your data</p>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="card-body max-w-sm shadow-2xl bg-base-100 rounded-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" {...register("email", {
                        required: "Name is Required"
                    })} className="input input-bordered" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" {...register("password", {
                        required: "Name is Required"
                    })} className="input input-bordered" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    <label className="label">
                        <Link to={'/register'} className="label-text-alt link link-hover">Don't Have Account? Register Now</Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                    {loginError && <p className='text-red-500'>{loginError}</p>}
                </div>
            </form>
        </div>
    );
};

export default Login;